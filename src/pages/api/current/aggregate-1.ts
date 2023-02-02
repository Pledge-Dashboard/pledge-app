import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const COINGECKO_API_URI = 'https://api.coingecko.com/api/v3';

  const res = await (await fetch(`${COINGECKO_API_URI}/coins/matic-network`)).json();

  if (!res?.market_data?.current_price?.usd) {
    response.send({
      error: 'Coingecko - No data found',
    });
    return;
  }
  const currentMaticPriceUSD = res.market_data.current_price.usd;

  let ankrData, claystackData, tenderizeData;

  //   ANKR DATA SYNC
  {
    const ANKR_API_URI = 'https://api.staking.ankr.com/v1alpha/metrics';
    const ankrApiRes = await (await fetch(ANKR_API_URI)).json();
    const polygonData = ankrApiRes.services.find((service: any) => service.serviceName === 'polygon');

    fetch(`${COINGECKO_API_URI}/coins/ankr-reward-earning-matic`).then(async (res) => {
      const result = await res.json();
      const currentPriceUSD = result?.market_data?.current_price?.usd;
      ankrData = {
        priceMatic: currentPriceUSD / currentMaticPriceUSD, // price of ANKR token in MATIC
        price: currentMaticPriceUSD / currentPriceUSD, // price of MATIC token in ANKR
        apy: polygonData.apy.toString(),
        stakers: polygonData.stakers.toString(),
        totalStaked: {
          matic: polygonData.totalStaked.toString(),
          usd: polygonData.totalStakedUsd.toString(),
        },
      };
    });
  }

  //   CLAYSTACK DATA SYNC
  {
    const CLAYSTACK_API_URI = 'https://api.claystack.com/polygon_stats';
    const claystackApiRes = await (await fetch(CLAYSTACK_API_URI)).json();

    const { price, apy, stakers, totalStaked } = claystackApiRes;

    claystackData = {
      priceMatic: price, // price of stMATIC token in MATIC
      price: 1 / price, // price of MATIC token in stMATIC
      apy: apy.toString(),
      stakers: stakers.toString(),
      totalStaked: {
        matic: totalStaked.matic.toString(),
        usd: totalStaked.usd.toString(),
      },
    };
  }

  //   Tenderize Data Sync
  {
    const TENDERIZE_APY_API_URI = 'https://www.tenderize.me/api/apy';
    const TENDERIZE_TVL_API_URI = 'https://www.tenderize.me/api/tvl';

    const {
      matic: { apy },
    } = await (await fetch(TENDERIZE_APY_API_URI)).json();
    const {
      matic: { tvl },
    } = await (await fetch(TENDERIZE_TVL_API_URI)).json();

    fetch(`${COINGECKO_API_URI}/coins/tmatic`).then(async (res) => {
      const result = await res.json();
      const currentPriceUSD = result?.market_data?.current_price?.usd;

      tenderizeData = {
        priceMatic: currentPriceUSD / currentMaticPriceUSD, // price of TMATIC token in MATIC
        price: currentMaticPriceUSD / currentPriceUSD, // price of MATIC token in TMATIC
        apy: apy.toString(),
        totalStaked: {
          usd: tvl.toString(),
          matic: (tvl / currentMaticPriceUSD).toString(),
        },
      };
    });
  }

  const result = {
    ankr: ankrData,
    claystack: claystackData,
    tenderize: tenderizeData,
    timestamp: new Date().getTime(),
  };

  const { database }: { database: Db } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

  try {
    // search for last doc. if within 24 hours, update it. else, insert new doc
    const lastDocument = await collection.findOne({}, { sort: { timestamp: -1 } });
    if (lastDocument && new Date().getTime() - lastDocument.timestamp < 85400000) {
      await collection.updateOne(
        { _id: lastDocument._id },
        {
          $set: {
            ankr: ankrData,
            claystack: claystackData,
            tenderize: tenderizeData,
          },
        }
      );
      const doc = await collection.findOne({ _id: lastDocument._id });
      response.status(200).json(doc);
    } else {
      const res = await collection.insertOne({ result, timestamp: new Date().getTime() });
      response.status(200).json(res);
    }
  } catch (error) {
    response.status(500).json({ error: error });
  }
}
