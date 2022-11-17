/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { AggregatedData, DataSnapshotAll, DataStore, HistoryByPlatform, PlatformData, PlatformNames } from '../types';
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

const defaultCurrentData = {
  _id: '',
  timestamp: '',
  lido: defaultPlatformData,
  ankr: defaultPlatformData,
  stader: defaultPlatformData,
  // claystack: defaultPlatformData,
  tenderize: defaultPlatformData,
  all: {
    stakers: '0',
    totalStaked: {
      matic: '0',
      usd: '0',
    },
  },
};

const DataStoreContext = createContext<DataStore>({
  current: defaultCurrentData,
  historical: [],
  historyByPlatform: {
    lido: [],
    ankr: [],
    stader: [],
    // claystack: [],
    tenderize: [],
    all: [],
  },
  averageAPY: '0',
  totalStaked: '0',
});

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json());

const DataStoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { data: fetchedCurrentData } = useSWR<DataSnapshotAll>('/api/current', fetcher);
  const { data: historical } = useSWR<Array<DataSnapshotAll>>('/api/historical', fetcher);

  const historyByPlatform = useMemo<HistoryByPlatform>(() => {
    const defaultHistoryByPlatform: HistoryByPlatform = {
      lido: [],
      ankr: [],
      stader: [],
      // claystack: [],
      tenderize: [],
      all: [],
    };

    const res = historical?.reduce<HistoryByPlatform>((acc, cur) => {
      const { _id, timestamp, ...platformsData } = cur;
      let totalStaked = 0;
      let totalStakedUSD = 0;
      let stakers = 0;

      const platforms = Object.keys(platformsData) as PlatformNames[];

      platforms.forEach((platform: PlatformNames) => {
        totalStaked += Number(platformsData[platform]?.totalStaked.matic ?? 0);
        totalStakedUSD += Number(platformsData[platform]?.totalStaked.usd ?? 0);
        stakers += Number(platformsData[platform]?.stakers ?? 0);

        acc[platform]?.push({ _id, timestamp, ...platformsData[platform] });
      });

      acc.all.push({
        _id,
        timestamp,
        stakers: String(stakers),
        totalStaked: {
          matic: totalStaked.toString(),
          usd: totalStakedUSD.toString(),
        },
      });

      return acc;
    }, defaultHistoryByPlatform);

    return res ?? defaultHistoryByPlatform;
  }, [historical]);

  const averageAPY = useMemo(() => {
    if (fetchedCurrentData) {
      let platforms = 0;

      const res = Object.values(fetchedCurrentData).reduce((acc, platform) => {
        if (platform?.apy || platform?.apr) {
          platforms += 1;
          acc += Number(platform?.apy ?? platform.apr);
        }
        return acc;
      }, 0);

      return formattedNum(res / platforms).toString();
    }
    return 'N/a';
  }, [fetchedCurrentData]);

  const totalStaked = useMemo(() => {
    if (fetchedCurrentData) {
      const res = Object.values(fetchedCurrentData).reduce((acc, platform) => {
        if (platform?.totalStaked) {
          acc += Number(platform.totalStaked.matic ?? 0);
        }
        return acc;
      }, 0);
      return res.toString();
    }
    return '0';
  }, [fetchedCurrentData]);

  const totalValueLocked = useMemo(() => {
    if (fetchedCurrentData) {
      const res = Object.values(fetchedCurrentData).reduce((acc, platform) => {
        if (platform?.totalStaked) {
          acc += Number(platform.totalStaked.usd);
        }
        return acc;
      }, 0);
      return res.toString();
    }
    return '0';
  }, [fetchedCurrentData]);

  const data = useMemo<DataSnapshotAll & AggregatedData>(() => {
    if (fetchedCurrentData) {
      const totalStakers = Object.values(fetchedCurrentData).reduce((acc, platform) => {
        if (platform?.stakers) {
          acc += Number(platform.stakers);
        }
        return acc;
      }, 0);

      return {
        ...fetchedCurrentData,
        all: {
          stakers: totalStakers,
          totalStaked: {
            matic: totalStaked,
            usd: totalValueLocked,
          },
        },
      };
    }
    return defaultCurrentData;
  }, [fetchedCurrentData, totalStaked, totalValueLocked]);

  return (
    <DataStoreContext.Provider
      value={{
        current: data,
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
