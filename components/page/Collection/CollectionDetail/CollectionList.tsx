import Card from "@/components/ui/Card";
interface NftListType {
  collection_name: string;
  token_id: string;
  image: string;
}
export default function CollectionList({ nftList }: any) {
  const { nfts = [] } = nftList;

  return (
    <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
      {nfts.map((nft: any) => {
        return <Card key={nft.token_id} {...nft} />;
      })}
    </div>
  );
}
