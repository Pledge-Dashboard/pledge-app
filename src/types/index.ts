export enum PLATFORMS {
  LIDO = 'lido',
  ANKR = 'ankr',
  STADER = 'stader',
  CLAYSTACK = 'claystack',
  TENDERIZE = 'tenderize',
}

// values of platforms enum
export type PlatformNames =
  | PLATFORMS.LIDO
  | PLATFORMS.ANKR
  | PLATFORMS.STADER
  | PLATFORMS.CLAYSTACK
  | PLATFORMS.TENDERIZE;

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
  [key in PLATFORMS]?: PlatformData;
};
export interface DataSnapshot extends Data {
  _id: string;
  timestamp: string;
}

export type HistoryByPlatform = {
  [key in PLATFORMS]: Array<DataSnapshot | undefined>;
};

export type DataStore = {
  current: DataSnapshot | undefined;
  setCurrent: (current: DataSnapshot) => void;
  historical: Array<DataSnapshot> | undefined;
  setHistorical: (historical: Array<DataSnapshot>) => void;
  historyByPlatform: HistoryByPlatform;
};
