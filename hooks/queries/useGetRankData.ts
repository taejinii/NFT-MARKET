import { useQuery } from "@tanstack/react-query";
import { getCollectionRanking } from "@/api/CollectionAPI";

export const useGetRankData = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ["collections"],
    getCollectionRanking
  );
  return { data, isLoading, isSuccess };
};
