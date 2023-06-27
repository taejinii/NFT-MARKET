import Card from "@/components/ui/Card";
interface NftListType {
  collection_name: string;
  token_id: string;
  image: string;
}
export default async function CollectionList({ promise }: any) {
  const { nfts } = await promise;
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {nfts &&
        nfts.map((nft: NftListType) => {
          return <Card key={nft.token_id} {...nft} />;
        })}
    </div>
  );
}
