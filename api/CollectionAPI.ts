export const getCollectionRanking = async (volumeFilter: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
  const res = await fetch(
    `https://data-api.nftgo.io/eth/v1/market/rank/collection/${volumeFilter}?by=volume&with_rarity=false&asc=false&offset=0&limit=20`,
    options
  );
  return res.json();
};

export const getCollectionNFTs = async (contract: string, limit: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
      cache: "no-store",
    },
  };
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
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
