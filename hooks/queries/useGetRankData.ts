import { useQuery } from "@tanstack/react-query";
import { getCollectionRanking } from "@/api/CollectionAPI";
export interface CollectionRankingData {
  volume_eth: number;
  name: string;
  logo: string;
  holder_num: number;
  floor_price_eth: number;
  whale_num: number;
  contracts: string;
  slug: string;
}
export interface CollectionRanking {
  collections: CollectionRankingData[];
}
export const useGetRankData = (volumeFilter: string) => {
  const { data, isLoading, isSuccess } = useQuery(
    ["collections", volumeFilter],
    (): Promise<CollectionRanking> => getCollectionRanking(volumeFilter)
  );
  return { data, isLoading, isSuccess };
};
