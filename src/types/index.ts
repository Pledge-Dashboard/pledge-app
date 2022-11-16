export enum PLATFORMS {
  LIDO = 'lido',
  ANKR = 'ankr',
  STADER = 'stader',
  TENDERIZE = 'tenderize',
}
export const PLATFORM_URI = {
  lido: 'https://polygon.lido.fi/',
  ankr: 'https://www.ankr.com/staking/stake/matic/',
  stader: 'https://polygon.staderlabs.com/liquid-staking/maticx?',
  tenderize: 'https://app.tenderize.me/stakers/matic',
};
export const PLATFORM_TOKEN = {
  lido: 'stMATIC',
  ankr: 'aMATICb',
  stader: 'MATICx',
  tenderize: 'tMATIC',
};
export const PLATFORM_NAME = {
  lido: 'Lido Finance',
  ankr: 'Ankr',
  stader: 'Stader',
  tenderize: 'Tenderize',
};

// values of platforms enum
export type PlatformNames = 'lido' | 'ankr' | 'stader' | 'tenderize';

export type PlatformData = {
  priceMatic: number;
  price: number;
  apy: string;
  apr?: string;
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
  historical: Array<DataSnapshotAll> | undefined;
  historyByPlatform: HistoryByPlatform;
};

export type FieldNames = keyof PlatformDataSnapshot | 'totalStakedUSD' | 'apr';
