import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { database }: { database: Db } = await connectToDatabase();
    const collection = database.collection('---');

    const defiLlamaData = await fetch('https://api.llama.fi/protocol/claystack');

    const defiLlamaDataJson = await defiLlamaData.json();

    const tvlArray = defiLlamaDataJson.tvl;

    const currentData = await collection.find({}, { sort: { timestamp: 1 } }).toArray();

    const currentDataJson = currentData;

    const currentDataDateWise = currentDataJson.reduce((acc, cur) => {
      const dateString = new Date(cur.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      acc[dateString] = cur;
      return acc;
    }, {});

    tvlArray.forEach((tvl, index) => {
      const { date, totalLiquidityUSD } = tvl;

      const timestamp = date * 1000;

      const dateString = new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      currentDataDateWise[dateString] = {
        ...currentDataDateWise[dateString],
        claystack: {
          totalStaked: {
            matic: defiLlamaDataJson.tokens[index].tokens.MATIC.toString(),
            usd: totalLiquidityUSD.toString(),
          },
        },
      };
    });

    const currentDataDateWiseArray = Object.keys(currentDataDateWise).map((key) => {
      return {
        ...currentDataDateWise[key],
        timestamp: new Date(key).getTime(),
        key,
      };
    });
    // sort
    currentDataDateWiseArray.sort((a, b) => a.timestamp - b.timestamp);

    // upload to collection newData
    // const newDataCollection = database.collection('---');
    // const res = await newDataCollection.insertMany(currentDataDateWiseArray);

    response.setHeader('Cache-Control', 's-maxage=300');
    response.status(200).json(currentDataDateWiseArray);
  } catch (e) {
    console.log(e);
    response.status(500).json({ error: e });
  }
}
