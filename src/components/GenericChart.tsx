/* eslint-disable @typescript-eslint/ban-ts-comment */
import DataStoreContext from '../context/DataStore';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Box, Skeleton } from '@chakra-ui/react';
import { FieldNames, PlatformNames } from '../types';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';
import { formattedNum } from '../utils/numberFormatter';

export enum TimePeriod {
  fifteenMinutes = 15 * 60,
  oneHour = 3600,
  fourHour = 4 * 3600,
  oneDay = 24 * 3600,
}

export const windowSizes: { [timePeriod in TimePeriod]: number } = {
  [TimePeriod.fifteenMinutes]: 3600 * 24,
  [TimePeriod.oneHour]: 3600 * 24 * 7 * 2,
  [TimePeriod.fourHour]: 3600 * 24 * 30,
  [TimePeriod.oneDay]: 3600 * 24 * 90,
};

dayjs.extend(utc);

const GenericChart: React.FC<{
  width: number;
  height: number;
  field: FieldNames;
  platform: PlatformNames | 'all';
}> = ({ width, height, field, platform }) => {
  const { historyByPlatform, isHistoricalDataLoading } = useContext(DataStoreContext);
  // const [value, setValue] = useState<number>(0);

  const data = useMemo(() => {
    if (!historyByPlatform?.[platform])
      return [
        {
          priceMatic: 0,
          price: 0,
          apy: '0',
          apr: '0',
          stakers: '0',
          totalStaked: '0',
          totalStakedUSD: '0',
          _id: '0',
          timestamp: '2022-01-01',
        },
      ];
    console.log(historyByPlatform[platform].at(-1));
    return historyByPlatform[platform].map((item) => {
      return {
        ...item,
        totalStaked: item.totalStaked?.matic,
        totalStakedUSD: item.totalStaked?.usd,
        apr: item?.apr,
        timestamp: Number((new Date(item.timestamp).getTime() / 1000).toFixed(0)),
      };
    });
  }, [historyByPlatform, platform]);

  const ref = useRef<HTMLDivElement | null>(null);
  const HEIGHT = height;
  const WIDTH = width;

  const [chartCreated, setChartCreated] = useState<IChartApi | undefined>(undefined);

  const formattedData = useMemo(() => {
    // data.map((entry) => {
    //   return {
    //     time: entry.timestamp,
    //     value: entry[field] ? parseFloat(String(entry[field])).toString() : 0,
    //   };
    // })
    const formattedData = [];
    for (const entry of data) {
      if (entry[field]) {
        formattedData.push({
          time: entry.timestamp,
          value: entry[field] ? parseFloat(String(entry[field])).toString() : 0,
        });
      }
    }
    return formattedData;
  }, [data, field]);

  // adjust the scale based on the type of chart
  const topScale = 0.32;
  const textColor = 'white';

  // if no chart created yet, create one with options and add to DOM manually
  useEffect(() => {
    let series: ISeriesApi<'Area'>;
    let chart: IChartApi;

    if (formattedData.length > 2) {
      chart = createChart(ref.current ? ref.current : '', {
        width: WIDTH,
        height: HEIGHT,
        layout: {
          backgroundColor: 'transparent',
          textColor: textColor,
        },
        rightPriceScale: {
          scaleMargins: {
            top: topScale,
            bottom: 0,
          },
          borderVisible: false,
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
        grid: {
          horzLines: {
            color: 'rgba(197, 203, 206, 0.5)',
            visible: false,
          },
          vertLines: {
            color: 'rgba(197, 203, 206, 0.5)',
            visible: false,
          },
        },
        crosshair: {
          mode: 0,
        },
        localization: {
          priceFormatter: (val: any) => formattedNum(val, true),
        },
      });
      series = chart.addAreaSeries({
        topColor: '#ff007a',
        bottomColor: 'rgba(255, 0, 122, 0)',
        lineColor: '#ff007a',
        lineWidth: 3,
      });
      series.priceScale().applyOptions({
        autoScale: false,
        scaleMargins: {
          top: 0.3,
          bottom: 0.05,
        },
      });
      // update the title when hovering on the chart
      chart.subscribeCrosshairMove(function (param) {
        if (
          param === undefined ||
          param.time === undefined ||
          (param?.point && (param.point.x < 0 || param.point.x > WIDTH || param.point.y < 0 || param.point.y > HEIGHT))
        ) {
          // setValue(0);
        } else {
          // const price = parseFloat(param?.seriesPrices?.get(series)?.toString() || '0');
          // setValue(price);
        }
      });
      chart.timeScale().fitContent();
      if (formattedData.length > 0) {
        //@ts-ignore
        series.setData(formattedData);
      }
      setChartCreated(chart);
    } else if (chartCreated && formattedData.length < 2) {
      if (ref.current) ref.current.innerHTML = 'Data Unavailable';
      setChartCreated(undefined);
    }
    return () => {
      if (ref.current) ref.current.innerHTML = '';
      chart?.remove();
    };
  }, [formattedData]);

  // responsiveness
  useEffect(() => {
    if (WIDTH) {
      chartCreated && chartCreated.resize(WIDTH, HEIGHT);
      chartCreated && chartCreated.timeScale().scrollToPosition(0, true);
    }
  }, [chartCreated, WIDTH, HEIGHT]);

  return (
    <Box
      w={width}
      h={height}
    >
      <Skeleton
        h="full"
        w="full"
        display={isHistoricalDataLoading ? 'block' : 'none'}
      />
      <Box
        ref={ref}
        id={'chart'}
      ></Box>
    </Box>
  );
};

export default GenericChart;
