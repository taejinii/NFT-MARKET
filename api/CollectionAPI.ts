import {
  CollectionDetails,
  NFTInfo,
  NFTTransAction,
  CollectionInfo,
  NFTCollectionList,
} from "@/types/types";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_NFT_GO_API_KEY as string,
  },
};
export const getCollectionRanking = async (volumeFilter: string) => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/market/rank/collection/${volumeFilter}?by=volume&with_rarity=false&asc=false&offset=0&limit=20`,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const getCollectionNFTs = async (
  contract: string,
  limit: number
): Promise<NFTCollectionList> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/collection/${contract}/nfts?offset=0&limit=${limit}`,
      { cache: "no-store", ...options }
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

/**OpenSea API */
export const getCollectionList = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/v2/collection/${slug}/nfts`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch OpenSea-API CollectionList data");
  }
};

export const getCollectionDetail = async (
  contract: string
): Promise<CollectionDetails> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/collection/${contract}/metrics`,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const getCollectionInfo = async (
  contract: string
): Promise<CollectionInfo> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/collection/${contract}/info`,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const getNFTInfoDetail = async (
  contract: string,
  tokenId: string
): Promise<NFTInfo> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/nft/${contract}/${tokenId}/info`,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const getSaleHistory = async (
  contract: string,
  tokenId: string
): Promise<NFTTransAction> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/history/nft/transactions?contract_address=${contract}&token_id=${tokenId}&action=all&scroll=1672531200000&scroll_limit=50`,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};
