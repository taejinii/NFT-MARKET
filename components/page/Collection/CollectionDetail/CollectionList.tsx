"use client";
import Card from "@/components/ui/Card";
import { useGetCollectionList } from "@/hooks/queries/useGetCollectionList";
import CollectionListLoading from "@/components/ui/Skeleton/CollectionListLoading";
export default function CollectionList({
  collectionContract,
}: {
  collectionContract: string;
}) {
  const { data, isLoading } = useGetCollectionList(collectionContract);
  return (
    <>
      {isLoading ? (
        <CollectionListLoading />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data?.pages.map((page) => {
            return page.nfts.map((nft) => {
              return <Card key={nft.identifier} {...nft} />;
            });
          })}
        </div>
      )}
    </>
  );
}
