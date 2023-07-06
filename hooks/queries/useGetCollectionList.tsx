import { useInfiniteQuery } from "@tanstack/react-query";
import { getCollectionListOpenSea } from "@/api/CollectionAPI";
import { CollectionList } from "@/types/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CollectionListLoading from "@/components/ui/Skeleton/CollectionListLoading";
export const useGetCollectionList = (collectionName: string) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useInfiniteQuery(
    ["OpenSeaCollectionList", collectionName],
    async ({ pageParam }): Promise<CollectionList> =>
      await getCollectionListOpenSea(collectionName, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next ?? undefined;
      },
      select: (data) => ({
        pageParams: data.pageParams,
        pages: data?.pages.flatMap((page) => page.nfts),
      }),
    }
  );
  const Observer = () => {
    const [ref, inView] = useInView({ threshold: 0 });
    useEffect(() => {
      if (!data || !hasNextPage) return;
      if (hasNextPage && inView) fetchNextPage();
    }, [inView]);
    return isFetchingNextPage ? (
      <CollectionListLoading skeletonCount={12} />
    ) : (
      <div ref={ref} />
    );
  };
  return { data, isLoading, fetchNextPage, Observer, isSuccess };
};
