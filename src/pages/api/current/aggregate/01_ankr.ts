import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../lib/mongodb';

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

  let ankrData;

  //   ANKR DATA SYNC
  {
    const ANKR_API_URI = 'https://api.staking.ankr.com/v1alpha/metrics';
    const ankrApiRes = await (await fetch(ANKR_API_URI)).json();
    const polygonData = ankrApiRes.services.find((service: any) => service.serviceName === 'polygon');

    const res = await fetch(`${COINGECKO_API_URI}/coins/ankr-reward-earning-matic`);
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
  }

  if (!ankrData) {
    response.status(500);

    response.send({
      error: 'Ankr - No data found',
    });
    return;
  }

  const result = {
    ankr: ankrData,
    timestamp: new Date().getTime(),
  };

  const { database }: { database: Db } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

  try {
    // search for last doc. if within 24 hours, update it. else, insert new doc
    const lastDocument = await collection.findOne({}, { sort: { timestamp: -1 } });
    if (lastDocument && new Date().getTime() - lastDocument.timestamp < 86300000) {
      await collection.updateOne(
        { _id: lastDocument._id },
        {
          $set: {
            ankr: ankrData,
          },
        }
      );
      const doc = await collection.findOne({ _id: lastDocument._id });
      response.status(200).json(doc);
    } else {
      const res = await collection.insertOne(result);
      response.status(200).json(res);
    }
  } catch (error) {
    response.status(500).json({ error: error });
  }
}
