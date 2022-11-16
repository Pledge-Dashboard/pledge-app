/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { DataSnapshotAll, DataStore, HistoryByPlatform, PlatformData, PlatformNames } from '../types';
import useSWR from 'swr';

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

  return (
    <DataStoreContext.Provider
      value={{
        current: currentData,
        historical: historical,
        historyByPlatform,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

export { DataStoreContext, DataStoreProvider };
export default DataStoreContext;
