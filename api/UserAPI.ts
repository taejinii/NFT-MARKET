import { User } from "@/types/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_NFT_GO_API_KEY as string,
  },
};
export const getUserInfo = async (address: string): Promise<User> => {
  try {
    const res = await fetch(
      `https://data-api.nftgo.io/eth/v1/address/${address}/portfolio?offset=0&limit=50
          `,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed fetch user info");
  }
};

export const getUserCollectionListOpenSea = async (
  owner: string,
  next?: string
) => {
  const params = new URLSearchParams({
    owner,
    limit: "12",
    order_direction: "desc",
  });
  const optionsOpensea = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY as string,
    },
  };
  let url = `https://api.opensea.io/api/v1/assets?${params}`;
  if (next) {
    url += `&cursor=${next}`;
  }
  try {
    const res = await fetch(url, optionsOpensea);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch OpenSea API User Collecion List Data");
  }
};
