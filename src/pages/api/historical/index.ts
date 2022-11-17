import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { database }: { database: Db } = await connectToDatabase();
    const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION || '');

    //   fetch latest document from collection
    const results = await collection.find({}, { limit: 26280, sort: { timestamp: 1 } }).toArray();

    response.setHeader('Cache-Control', 's-maxage=300');
    response.status(200).json(results);
  } catch (e) {
    console.log(e);
    response.status(500).json({ error: e });
  }
}
