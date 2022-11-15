import { Box } from '@chakra-ui/react';
import React, { useContext, useMemo, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import DataStoreContext from '../context/DataStore';

const GenericChart: React.FC = () => {
  const { historyByPlatform } = useContext(DataStoreContext);

  const data = useMemo(() => {
    if (historyByPlatform.lido) {
      return historyByPlatform.lido.map((entry) => ({
        ...entry,
        timestamp: new Date(entry.timestamp).toDateString().split(' ').slice(1, 3).join(' '),
      }));
    }
    return [];
  }, [historyByPlatform]);
  //   const base = data && data[data.length - 1][field];
  //   const baseChange = data ? ((data[data?.length - 1][field] - data[0][field]) / data[0][field]) * 100 : 0;
  const dataKey = 'price';
  return (
    <Box>
      {historyByPlatform && (
        <AreaChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <Tooltip />
          <XAxis dataKey={'timestamp'} />
          <YAxis dataKey={dataKey} />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={'#FF44D6'}
            fill={'transparent'}
            fillOpacity={'0.3'}
            strokeWidth={3}
          />
        </AreaChart>
      )}
    </Box>
  );
};

export default GenericChart;
