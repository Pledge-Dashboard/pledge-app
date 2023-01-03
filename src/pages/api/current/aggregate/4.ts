import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  let lidoData;

  //   LIDO DATA SYNC
  {
    const LIDO_API_URI = 'https://polygon.lido.fi/api/stats';
    const lidoApiRes = await (await fetch(LIDO_API_URI)).json();
    const { price, apr, stakers, totalStaked } = lidoApiRes;

    lidoData = {
      priceMatic: 1 / price, // price of stMATIC token in MATIC
      price, // price of MATIC token in stMATIC
      apr: apr.toString(),
      stakers: stakers.toString(),
      totalStaked: {
        matic: totalStaked.token.toString(),
        usd: totalStaked.usd.toString(),
      }, // total staked MATIC in Lido
    };
  }

  if (!lidoData) {
    response.status(500);
    response.send({
      error: 'Lido - No data found',
    });
    return;
  }

  const result = {
    lido: lidoData,
    timestamp: new Date().getTime(),
  };

  const { database }: { database: Db } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

  try {
    // search for last document. if within 24 hours, update it. else, insert new document
    const lastDocument = await collection.findOne({}, { sort: { timestamp: -1 } });
    if (lastDocument && new Date().getTime() - lastDocument.timestamp < 86400000) {
      await collection.updateOne(
        { _id: lastDocument._id },
        {
          $set: {
            ...result,
          },
        }
      );

      const doc = await collection.findOne({ _id: lastDocument._id });

      // response.setHeader('Cache-Control', 's-maxage=300');
      response.status(200).json(doc);
    } else {
      const res = await collection.insertOne(result);
      // response.setHeader('Cache-Control', 's-maxage=300');
      response.status(200).json(res);
    }
  } catch (error) {
    response.status(500).json({ error: error });
  }
}
