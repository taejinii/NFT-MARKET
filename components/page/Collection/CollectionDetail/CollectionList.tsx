import Card from "@/components/ui/Card";
import { NFTCollectionList } from "@/types/types";

export default async function CollectionList({
  promise,
}: {
  promise: Promise<NFTCollectionList>;
}) {
  const { nfts } = await promise;
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {nfts.map((nft) => {
        return <Card key={nft.token_id} {...nft} />;
      })}
    </div>
  );
}
