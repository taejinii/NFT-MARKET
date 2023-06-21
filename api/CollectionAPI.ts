export const getCollectionRanking = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
  const res = await fetch(
    "https://data-api.nftgo.io/eth/v1/market/rank/collection/24h?by=volume&with_rarity=false&asc=false&offset=0&limit=20",
    options
  );
  return res.json();
};
export const getCollectionNFTs = async (contract: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
  const res = await fetch(
    `https://data-api.nftgo.io/eth/v1/collection/${contract}/nfts`,
    options
  );
  return res.json();
};
export const getCollectionDetail = async (contract: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
  const res = await fetch(
    `https://data-api.nftgo.io/eth/v1/collection/${contract}/metrics`,
    options
  );
  return res.json();
};
