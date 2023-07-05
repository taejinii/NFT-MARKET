import {
  NFTInfo,
  NFTTransAction,
  NFTCollectionList,
  CollectionInfo,
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

/**OpenSea API */
const optionsOpensea = {
  method: "GET",
  headers: { "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY as string },
};

export const getCollectionListOpenSea = async (slug: string, next?: string) => {
  try {
    let url = `https://api.opensea.io/v2/collection/${slug}/nfts?limit=12`;
    if (next) {
      url += `&next=${next}`;
    }
    const res = await fetch(url, optionsOpensea);
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch OpenSea-API CollectionList data");
  }
};

export const getCollectionInfoOpenSea = async (
  collection_slug: string
): Promise<CollectionInfo> => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v1/collection/${collection_slug}`,
      optionsOpensea
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch OpenSea-API CollectionInfo data");
  }
};
export const getNFTInfo = async (
  asset_contract_address: string,
  token_id: string
) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/
    `,
      optionsOpensea
    );
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
