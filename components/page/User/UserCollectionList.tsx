import { User } from "@/types/types";
import Card from "@/components/ui/Card";

export default function UserCollectionList({ userInfo }: { userInfo: User }) {
  const { assets, total } = userInfo;
  return (
    <div className="flex flex-col font-bold">
      <p className="py-6 text-xl">{total} items</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {assets.map((asset) => {
          return <Card key={asset.nft.token_id} {...asset.nft} />;
        })}
      </div>
    </div>
  );
}
