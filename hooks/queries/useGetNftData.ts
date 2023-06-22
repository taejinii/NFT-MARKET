import { useQuery } from "@tanstack/react-query";
import { getCollectionNFTs } from "@/api/CollectionAPI";
export const useGetNftData = (contract: string, limit: number) => {
  const { data, isLoading } = useQuery(["nftList"], () =>
    getCollectionNFTs(contract, limit)
  );

  return { data, isLoading };
};
