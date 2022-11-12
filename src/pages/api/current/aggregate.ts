import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const COINGECKO_API_URI = 'https://api.coingecko.com/api/v3';

  const {
    market_data: {
      current_price: { usd: currentMaticPriceUSD },
    },
  } = await (await fetch(`${COINGECKO_API_URI}/coins/matic-network`)).json();

  let lidoData, staderData, ankrData, claystackData, tenderizeData;

  //   LIDO DATA SYNC
  {
    const LIDO_API_URI = 'https://polygon.lido.fi/api/stats';
    const lidoApiRes = await (await fetch(LIDO_API_URI)).json();
    const { price, apr, stakers, totalStaked } = lidoApiRes;

    // const {
    //   market_data: {
    //     current_price: { usd: currentPriceUSD },
    //   },
    //   price_change_percentage_24h,
    // } = await (await fetch(`${COINGECKO_API_URI}/coins/lido-staked-matic`)).json();

    lidoData = {
      priceMatic: 1 / price, // price of stMATIC token in MATIC
      price, // price of MATIC token in stMATIC
      apr,
      stakers,
      totalStaked: {
        matic: totalStaked.token,
        usd: totalStaked.usd,
      }, // total staked MATIC in Lido
    };
  }

  //   STADER DATA SYNC
  {
    const STADER_TVL_API = 'https://staderverse.staderlabs.com/tvl';
    const staderTvlApiRes = await (await fetch(STADER_TVL_API)).json();
    const { polygon } = staderTvlApiRes;

    staderData = {
      price: polygon.exchangeRate, // price of stMATIC token in MATIC
      priceMatic: 1 / polygon.exchangeRate, // price of MATIC token in stMATIC
      apy: polygon?.apy || '5.76',
      totalStaked: {
        matic: polygon.native,
        usd: polygon.usd,
      }, // total staked MATIC in Stader
    };
  }

  //   ANKR DATA SYNC
  {
    const ANKR_API_URI = 'https://api.staking.ankr.com/v1alpha/metrics';
    const ankrApiRes = await (await fetch(ANKR_API_URI)).json();
    const polygonData = ankrApiRes.services.find((service) => service.serviceName === 'polygon');

    const {
      market_data: {
        current_price: { usd: currentPriceUSD },
      },
    } = await (await fetch(`${COINGECKO_API_URI}/coins/ankr-matic-reward-earning-bond`)).json();

    ankrData = {
      priceMatic: currentPriceUSD / currentMaticPriceUSD, // price of ANKR token in MATIC
      price: currentMaticPriceUSD / currentPriceUSD, // price of MATIC token in ANKR
      apy: polygonData.apy,
      stakers: polygonData.stakers,
      totalStaked: {
        matic: polygonData.totalStaked,
        usd: polygonData.totalStakedUsd,
      },
    };
  }

  //   CLAYSTACK DATA SYNC
  {
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

    const {
      market_data: {
        current_price: { usd: currentPriceUSD },
      },
    } = await (await fetch(`${COINGECKO_API_URI}/coins/tmatic`)).json();

    tenderizeData = {
      priceMatic: currentPriceUSD / currentMaticPriceUSD, // price of TMATIC token in MATIC
      price: currentMaticPriceUSD / currentPriceUSD, // price of MATIC token in TMATIC
      apy,
      totalStaked: {
        usd: tvl,
        matic: tvl / currentMaticPriceUSD,
      },
    };
  }

  const result = {
    lido: lidoData,
    stader: staderData,
    ankr: ankrData,
    claystack: claystackData,
    tenderize: tenderizeData,
    timestamp: new Date().toISOString(),
  };

  const { database }: { database: Db } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

  try {
    await collection.insertOne(result);
    response.setHeader('Cache-Control', 's-maxage=300');
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ error: error?.message });
  }
}
