import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  let claystackData;

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

  if (!claystackData) {
    response.status(500);
    response.send({
      error: 'Claystack - No data found',
    });
    return;
  }

  const result = {
    claystack: claystackData,
    timestamp: new Date().getTime(),
  };

  const { database }: { database: Db } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

  try {
    // search for last doc. if within 24 hours, update it. else, insert new doc
    const lastDocument = await collection.findOne({}, { sort: { timestamp: -1 } });
    if (lastDocument && new Date().getTime() - lastDocument.timestamp < 86400000) {
      await collection.updateOne(
        { _id: lastDocument._id },
        {
          $set: {
            claystack: claystackData,
            timestamp: new Date().getTime(),
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
