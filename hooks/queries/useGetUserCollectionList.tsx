import { useInfiniteQuery } from "@tanstack/react-query";
import { getUserCollectionList } from "@/api/UserAPI";
import CollectionListLoading from "@/components/ui/Skeleton/CollectionListLoading";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const useGetUserCollectionList = (owner: string) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useInfiniteQuery(
    ["OpenSeaUerCollectionList", owner],
    ({ pageParam }) => getUserCollectionList(owner, pageParam),
    {
      getNextPageParam: (lastPage) => {
        console.log(lastPage);
        return lastPage.next ?? undefined;
      },
      select: (data) => ({
        pageParams: data.pageParams,
        pages: data?.pages.flatMap((page) => page.assets),
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
  return { data, isLoading, Observer, isSuccess };
};
