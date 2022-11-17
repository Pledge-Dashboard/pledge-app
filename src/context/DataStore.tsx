/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { DataSnapshotAll, DataStore, HistoryByPlatform, PlatformData, PlatformNames } from '../types';
import useSWR from 'swr';
import { formattedNum } from '../utils/numberFormatter';

export const defaultPlatformData: PlatformData = {
  priceMatic: 0,
  price: 0,
  apy: '0',
  stakers: '0',
  totalStaked: {
    matic: '0',
    usd: '0',
  },
};

const DataStoreContext = createContext<DataStore>({
  current: {
    _id: '',
    timestamp: '',
    lido: defaultPlatformData,
    ankr: defaultPlatformData,
    stader: defaultPlatformData,
    // claystack: defaultPlatformData,
    tenderize: defaultPlatformData,
  },
  historical: [],
  historyByPlatform: {
    lido: [],
    ankr: [],
    stader: [],
    // claystack: [],
    tenderize: [],
  },
  averageAPY: '0',
  totalStaked: '0',
});

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json());

const DataStoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { data: currentData } = useSWR<DataSnapshotAll>('/api/current', fetcher);
  const { data: historical } = useSWR<Array<DataSnapshotAll>>('/api/historical', fetcher);

  const historyByPlatform = useMemo<HistoryByPlatform>(() => {
    const defaultHistoryByPlatform: HistoryByPlatform = {
      lido: [],
      ankr: [],
      stader: [],
      // claystack: [],
      tenderize: [],
    };

    historical?.reduce<HistoryByPlatform>((acc, current) => {
      const { _id, timestamp, ...platformsData } = current;

      const platforms = Object.keys(platformsData) as PlatformNames[];

      platforms.forEach((platform: PlatformNames) => {
        acc[platform]?.push({ _id, timestamp, ...platformsData[platform] });
      });

      return acc;
    }, defaultHistoryByPlatform);

    return defaultHistoryByPlatform;
  }, [historical]);

  const averageAPY = useMemo(() => {
    if (currentData) {
      let platforms = 0;

      const res = Object.values(currentData).reduce((acc, platform) => {
        if (platform?.apy || platform?.apr) {
          platforms += 1;
          acc += Number(platform?.apy ?? platform.apr);
        }
        return acc;
      }, 0);

      return formattedNum(res / platforms).toString();
    }
    return 'N/a';
  }, [currentData]);

  const totalStaked = useMemo(() => {
    if (currentData) {
      const res = Object.values(currentData).reduce((acc, platform) => {
        if (platform?.totalStaked) {
          acc += Number(platform.totalStaked.matic);
        }
        return acc;
      }, 0);
      return formattedNum(res).toString();
    }
    return '0';
  }, [currentData]);

  return (
    <DataStoreContext.Provider
      value={{
        current: currentData,
        historical: historical,
        historyByPlatform,
        averageAPY,
        totalStaked,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

export { DataStoreContext, DataStoreProvider };
export default DataStoreContext;
