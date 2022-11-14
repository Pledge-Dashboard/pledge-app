/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';

export enum Platforms {
  LIDO = 'lido',
  ANKR = 'ankr',
  STADER = 'stader',
  CLAYSTACK = 'claystack',
  TENDERIZE = 'tenderize',
}

// values of platforms enum
export type PlatformNames =
  | Platforms.LIDO
  | Platforms.ANKR
  | Platforms.STADER
  | Platforms.CLAYSTACK
  | Platforms.TENDERIZE;

export type PlatformData = {
  priceMatic: number;
  price: number;
  apr: string;
  stakers: string;
  totalStaked: {
    matic: string;
    usd: string;
  };
};
export type Data = {
  [key in Platforms]?: PlatformData;
};
export interface DataSnapshot extends Data {
  _id: string;
  timestamp: string;
}

export type HistoryByPlatform = {
  [key in Platforms]?: Array<DataSnapshot | undefined> | undefined;
};

export type DataStore = {
  current: DataSnapshot | undefined;
  setCurrent: (current: DataSnapshot) => void;
  historical: Array<DataSnapshot> | undefined;
  setHistorical: (historical: Array<DataSnapshot>) => void;
};

const DataStoreContext = createContext<DataStore | null>({
  current: {
    _id: '',
    timestamp: '',
    lido: undefined,
    ankr: undefined,
    stader: undefined,
    claystack: undefined,
    tenderize: undefined,
  },
  setCurrent: () => {},
  historical: [],
  setHistorical: () => {},
});

// const DataStoreProvider = DataStoreContext.Provider;

const DataStoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [currentData, setCurrent] = useState<DataSnapshot | undefined>(undefined);
  const [historical, setHistorical] = useState<Array<DataSnapshot> | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const currentResults = await fetch('/api/current/').then((response) => response.json());
      const historicalResults = await fetch('/api/historical/').then((response) => response.json());
      setCurrent(currentResults);
      setHistorical(historicalResults);
    })();
  }, []);

  const historyByPlatform = historical?.reduce<HistoryByPlatform>(
    (acc, current) => {
      const { _id, timestamp, ...platforms } = current;

      Object.keys(platforms).forEach((platform) => {
        acc[platform].push({ _id, timestamp, ...platforms[platform] });
      });
      return acc;
    },
    {
      lido: [],
      ankr: [],
      stader: [],
      claystack: [],
      tenderize: [],
    }
  );

  return (
    <DataStoreContext.Provider
      value={{
        current: currentData,
        setCurrent: setCurrent,
        historical: historical,
        setHistorical: setHistorical,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

export { DataStoreContext, DataStoreProvider };
export default DataStoreContext;

// current data
// {
//     "_id": "63724adcf22b5a0212d93c51",
//     "lido": {
//         "priceMatic": 1.0443471577047756,
//         "price": 0.957536,
//         "apr": "6.3",
//         "stakers": "1227",
//         "totalStaked": {
//             "matic": "46408996.32085574",
//             "usd": "44438284.70108692"
//         }
//     },
//     "stader": {
//         "price": 0.945014,
//         "priceMatic": 1.0581853813805933,
//         "apy": "5.76",
//         "totalStaked": {
//             "matic": "39203405",
//             "usd": "37047766.57267"
//         }
//     },
//     "ankr": {
//         "priceMatic": 1.0048314902719577,
//         "price": 0.9951917407856613,
//         "apy": "4.342470462",
//         "stakers": "1056",
//         "totalStaked": {
//             "matic": "1323009.0143068235",
//             "usd": "1269691.751"
//         }
//     },
//     "claystack": null,
//     "tenderize": {
//         "priceMatic": 0.8236003541893898,
//         "price": 1.2141811194146797,
//         "apy": "5.55",
//         "totalStaked": {
//             "usd": "287500.4289270947",
//             "matic": "304150.54205056897"
//         }
//     },
//     "timestamp": "2022-11-14T14:04:10.506Z"
// }
