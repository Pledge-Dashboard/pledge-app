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
  apr?: string;
  apy?: string;
  stakers: string;
  totalStaked: {
    matic: string;
    usd: string;
  };
};
export interface PlatformDataSnapshot extends PlatformData {
  _id: string;
  timestamp: string;
}

export type Data = {
  [key in PLATFORMS]: PlatformData;
};

export interface DataSnapshotAll extends Data {
  _id: string;
  timestamp: string;
}

export type HistoryByPlatform = {
  [key in PLATFORMS]: Array<PlatformDataSnapshot>;
};

export type DataStore = {
  current: DataSnapshotAll | undefined;
  setCurrent: (current: DataSnapshotAll) => void;
  historical: Array<DataSnapshotAll> | undefined;
  setHistorical: (historical: Array<DataSnapshotAll>) => void;
  historyByPlatform: HistoryByPlatform;
};
