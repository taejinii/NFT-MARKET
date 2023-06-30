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
      `https://data-api.nftgo.io/eth/v1/address/${address}/portfolio
          `,
      options
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed fetch user info");
  }
};
