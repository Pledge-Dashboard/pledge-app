/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FunctionComponent, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { DataSnapshotAll, DataStore, HistoryByPlatform, PlatformData, PlatformNames } from '../types';

const defaultPlatformData: PlatformData = {
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
    claystack: defaultPlatformData,
    tenderize: defaultPlatformData,
  },
  setCurrent: () => {},
  historical: [],
  setHistorical: () => {},
  historyByPlatform: {
    lido: [],
    ankr: [],
    stader: [],
    claystack: [],
    tenderize: [],
  },
});

// const DataStoreProvider = DataStoreContext.Provider;

const DataStoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [currentData, setCurrent] = useState<DataSnapshotAll | undefined>(undefined);
  const [historical, setHistorical] = useState<Array<DataSnapshotAll> | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const currentResults = await fetch('/api/current/').then((response) => response.json());
      const historicalResults = await fetch('/api/historical/').then((response) => response.json());
      setCurrent(currentResults);
      setHistorical(historicalResults);
    })();
  }, []);

  const historyByPlatform = useMemo<HistoryByPlatform>(() => {
    const defaultHistoryByPlatform: HistoryByPlatform = {
      lido: [],
      ankr: [],
      stader: [],
      claystack: [],
      tenderize: [],
    };

    historical?.reduce<HistoryByPlatform>((acc, current) => {
      const { _id, timestamp, ...platformsData } = current;

      const platforms = Object.keys(platformsData) as PlatformNames[];

      platforms.forEach((platform: PlatformNames) => {
        acc[platform].push({ _id, timestamp, ...platformsData[platform] });
      });

      return acc;
    }, defaultHistoryByPlatform);

    return defaultHistoryByPlatform;
  }, [historical]);

  return (
    <DataStoreContext.Provider
      value={{
        current: currentData,
        setCurrent: setCurrent,
        historical: historical,
        setHistorical: setHistorical,
        historyByPlatform,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

export { DataStoreContext, DataStoreProvider };
export default DataStoreContext;
