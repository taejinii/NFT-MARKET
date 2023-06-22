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
  params: { collectionContaract: string };
}) {
  const { collectionContaract } = params;
  const [detail, info] = await Promise.all([
    getCollectionDetail(collectionContaract),
    getCollectionInfo(collectionContaract),
  ]);
  const nftList = await getCollectionNFTs(collectionContaract);
  return (
    <>
      <header className="flex flex-col items-start gap-10 py-10 mt-10 font-sans font-bold">
        <CollectionInfo info={info} />
        <CollectionDetail detail={detail} />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <CollectionList nftList={nftList} />
      </Suspense>
    </>
  );
}
