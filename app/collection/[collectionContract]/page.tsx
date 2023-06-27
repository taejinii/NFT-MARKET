import {
  getCollectionDetail,
  getCollectionNFTs,
  getCollectionInfo,
} from "../../../api/CollectionAPI";
import CollectionDetail from "@/components/page/Collection/CollectionDetail/CollectionDetail";
import CollectionInfo from "@/components/page/Collection/CollectionDetail/CollectionInfo";
import CollectionList from "@/components/page/Collection/CollectionDetail/CollectionList";
import { Suspense } from "react";
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

  const nftListData = getCollectionNFTs(collectionContract, 20);
  return (
    <>
      <header className="flex flex-col items-start gap-10 py-10 mt-10 font-bold">
        <Suspense fallback={<div>Loading...</div>}>
          <CollectionInfo info={info} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <CollectionDetail detail={detail} />
        </Suspense>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <CollectionList promise={nftListData} />
      </Suspense>
    </>
  );
}
