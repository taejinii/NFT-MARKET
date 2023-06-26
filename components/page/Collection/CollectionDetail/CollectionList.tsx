import Card from "@/components/ui/Card";
interface NftListType {
  collection_name: string;
  token_id: string;
  image: string;
}
export default function CollectionList({ nftList }: any) {
  const { nfts = [] } = nftList;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {nfts.map((nft: any) => {
        return <Card key={nft.token_id} {...nft} />;
      })}
    </div>
  );
}
