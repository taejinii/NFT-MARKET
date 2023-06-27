export interface CollectionDetails {
  total_supply: number;
  holder_num: number;
  floor_price: { value: number };
  volume_eth: { all: number };
}

interface Traits {
  type: string;
  value: string;
  percentage: number;
}
export interface NFTInfo {
  image: string;
  collection_name: string;
  name: string;
  rarity: { rank: number; total: number };
  owner_addresses: string[];
  contract_address: string;
  traits: Traits[];
}

export interface CollectionInfo {
  name: string;
  description: string;
  logo: string;
  discord_url: string;
  twitter_url: string;
}

interface NFTSaleHistory {
  action: string;
  sender: { address: string };
  price: { value: number };
  receiver: { address: string };
  tx_hash: string;
  time: number;
}
export interface NFTTransAction {
  transactions: NFTSaleHistory[];
}

export interface CollectionList {
  collection_name: string;
  token_id: string;
  image: string;
  name: string;
  contract_address: string;
  last_sale: number;
}
export interface NFTCollectionList {
  nfts: CollectionList[];
}
