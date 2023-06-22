import { useQuery } from "@tanstack/react-query";
import { getCollectionNFTs } from "@/api/CollectionAPI";
interface NftListData {
  collection_name: string;
  last_sale: number;
  image: string;
  name: string;
  contract_address: string;
  token_id: number;
}
interface NftList {
  nfts: NftListData[];
}
export const useGetNftData = (contract: string, limit: number) => {
  const { data, isLoading } = useQuery(
    ["nftList"],
    (): Promise<NftList> => getCollectionNFTs(contract, limit)
  );

  return { data, isLoading };
};
