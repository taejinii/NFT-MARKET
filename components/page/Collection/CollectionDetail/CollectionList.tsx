"use client";
import Card from "@/components/ui/Card";
import { useGetCollectionList } from "@/hooks/queries/useGetCollectionList";
import CollectionListLoading from "@/components/ui/Skeleton/CollectionListLoading";
export default function CollectionList({
  collectionName,
}: {
  collectionName: string;
}) {
  const { data, isLoading, Observer } = useGetCollectionList(collectionName);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <CollectionListLoading skeletonCount={12} />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data?.pages.map((nft) => {
            return <Card key={nft.identifier} {...nft} />;
          })}
        </div>
      )}
      <Observer />
    </>
  );
}
