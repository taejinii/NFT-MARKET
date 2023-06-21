export const getCollectionRanking = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_NFT_GO_API_KEY}`,
    },
  };
  const res = await fetch(
    "https://data-api.nftgo.io/eth/v1/market/rank/collection/1h?by=volume&with_rarity=false&asc=false&offset=0&limit=20",
    options
  );
  return res.json();
};
