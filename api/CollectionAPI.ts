const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_NFT_GO_API_KEY as string,
  },
};
export const getCollectionRanking = async (volumeFilter: string) => {
  const res = await fetch(
    `https://data-api.nftgo.io/eth/v1/market/rank/collection/${volumeFilter}?by=volume&with_rarity=false&asc=false&offset=0&limit=20`,
    options
  );
  return res.json();
};

export const getCollectionNFTs = async (contract: string, limit: number) => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/collection/${contract}/nfts?offset=0&limit=${limit}`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getCollectionDetail = async (contract: string) => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/collection/${contract}/metrics`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionInfo = async (contract: string) => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/collection/${contract}/info`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

interface NftInfo {
  collection_name: string;
  name: string;
  image: string;
  traits: { type: string; value: string; percentage: number }[];
  rarity: { score: number; rank: number; total: number };
  owner_addresses: string;
}
export const getNFTInfoDetail = async (
  contract: string,
  tokenId: string
): Promise<NftInfo> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/nft/${contract}/${tokenId}/info`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSaleHistory = async (contract: string, tokenId: string) => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/history/nft/transactions?contract_address=${contract}&token_id=${tokenId}&action=all&scroll=1262304000000&scroll_limit=50`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
