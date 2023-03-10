import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  let staderData;
  //   STADER DATA SYNC
  {
    const STADER_TVL_API = 'https://universe.staderlabs.com/common/tvl';
    const staderTvlApiRes = await (await fetch(STADER_TVL_API)).json();
    const { polygon } = staderTvlApiRes;

    staderData = {
      price: polygon.exchangeRate, // price of stMATIC token in MATIC
      priceMatic: 1 / polygon.exchangeRate, // price of MATIC token in stMATIC
      apy: polygon?.apy?.toString() || '5.76',
      totalStaked: {
        matic: polygon.native.toString(),
        usd: polygon.usd.toString(),
      }, // total staked MATIC in Stader
    };
  }

  if (!staderData) {
    response.status(500);
    response.send({
      error: 'Stader - No data found',
    });
    return;
  }

  const result = {
    stader: staderData,
    timestamp: new Date().getTime(),
  };

  const { database }: { database: Db } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

  try {
    // search for last document. if within 24 hours, update it. else, insert new document
    const lastDocument = await collection.findOne({}, { sort: { timestamp: -1 } });
    if (lastDocument && new Date().getTime() - lastDocument.timestamp < 85400000) {
      await collection.updateOne(
        { _id: lastDocument._id },
        {
          $set: {
            stader: staderData,
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
