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
  last_sale?: { price_token: number; token_symbol: string };
}
export interface NFTCollectionList {
  nfts: CollectionList[];
}

/**UserInfoType */
interface UserAssets {
  nft: {
    blockchain: string;
    collection_name: string;
    token_id: string;
    image: string;
    name: string;
    contract_address: string;
    owner_addresses: string;
  };
}
export interface User {
  total: number;
  assets: UserAssets[];
}

export interface OpenSeaCollectionListType {
  identifier: string;
  contract: string;
  image_url: string;
  name: string;
  collection: string;
  price?: number;
}
export interface CollectionList {
  next: string;
  nfts: OpenSeaCollectionListType[];
}

export interface CollectionInfoType {
  name: string;
  description: string;
  image_url: string;
  discord_url: string;
  twitter_username: string;
  banner_image_url: string;
}
export interface CollectionStatsType {
  total_supply: number;
  floor_price: number;
  num_owners: number;
  total_volume: number;
}
export interface CollectionInfo {
  collection: {
    name: string;
    description: string;
    image_url: string;
    discord_url: string;
    twitter_username: string;
    banner_image_url: string;
    slug: string;
    afelist_request_status: string;
    stats: CollectionStatsType;
  };
}
export interface OpenSeaTraitsType {
  trait_type: string;
  trait_count: number;
  value: string;
}
export interface OwnerType {
  owner: {
    user: {
      username: string;
    };
    address: string;
  };
}
export interface OpenSeaNFTInfo {
  name: string;
  image_url: string;
  token_id: string;
  asset_contract: {
    address: string;
    owner: string;
    name: string;
  };
  collection: {
    slug: string;
    name: string;
  };
  traits: OpenSeaTraitsType[];
  top_ownerships: OwnerType[];
}
