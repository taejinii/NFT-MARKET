import {
  getCollectionDetail,
  getCollectionNFTs,
  getCollectionInfo,
} from "../../../api/CollectionAPI";
import CollectionDetail from "@/components/page/Collection/CollectionDetail/CollectionDetail";
import CollectionInfo from "@/components/page/Collection/CollectionDetail/CollectionInfo";
import CollectionList from "@/components/page/Collection/CollectionDetail/CollectionList";
export default async function CollectionDetailPage({
  params,
}: {
  params: { collectionContract: string };
}) {
  const { collectionContract } = params;

  const [detail, info] = await Promise.all([
    getCollectionDetail(collectionContract),
    getCollectionInfo(collectionContract),
  ]);
  const nftList = await getCollectionNFTs(collectionContract, 50);
  return (
    <>
      <header className="flex flex-col items-start gap-10 py-10 mt-10 font-bold">
        <CollectionInfo info={info} />
        <CollectionDetail detail={detail} />
      </header>
      <CollectionList nftList={nftList} />
    </>
  );
}
