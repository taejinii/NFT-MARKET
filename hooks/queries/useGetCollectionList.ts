import { useInfiniteQuery } from "@tanstack/react-query";
import { getCollectionListOpenSea } from "@/api/CollectionAPI";
import { CollectionList } from "@/types/types";
export const useGetCollectionList = (collectionContract: string) => {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ["OpenSeaCollectionList"],
    async ({ pageParam }): Promise<CollectionList> =>
      await getCollectionListOpenSea(collectionContract, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next ?? undefined;
      },
    }
  );
  return { data, isLoading, fetchNextPage };
};
