"use client";
import { useGetUserCollectionList } from "@/hooks/queries/useGetUserCollectionList";
import Card from "@/components/ui/Card";
import CollectionListLoading from "@/components/ui/Skeleton/CollectionListLoading";
export default function UserCollectionList({ contract }: { contract: string }) {
  const { data, isLoading, Observer, isSuccess } =
    useGetUserCollectionList(contract);
  return (
    <div className="flex flex-col pt-10 font-bold">
      {isLoading && !isSuccess ? (
        <CollectionListLoading skeletonCount={12} />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data?.pages.map((nft) => {
            return (
              <Card
                key={nft.id}
                identifier={nft.token_id}
                contract={nft.asset_contract.address}
                image_url={nft.image_url}
                name={nft.name}
                collection={nft.collection.name}
              />
            );
          })}
        </div>
      )}
      <Observer />
    </div>
  );
}
