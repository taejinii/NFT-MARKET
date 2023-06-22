import { useQuery } from "@tanstack/react-query";
import { getCollectionNFTs } from "@/api/CollectionAPI";
interface NftListData {}
export const useGetNftData = (contract: string, limit: number) => {
  const { data, isLoading } = useQuery(
    ["nftList"],
    (): Promise<NftListData> => getCollectionNFTs(contract, limit)
  );

  return { data, isLoading };
};
