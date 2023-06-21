import {
  getCollectionDetail,
  getCollectionNFTs,
  getCollectionInfo,
} from "../../../api/CollectionAPI";
import Image from "next/image";
import CollectionDetail from "@/components/page/Collection/CollectionDetail/CollectionDetail";
import CollectionInfo from "@/components/page/Collection/CollectionDetail/CollectionInfo";
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

  const { name, description, logo, discord_url, twitter_url } = info;
  return (
    <>
      <header className="flex flex-col items-start gap-10 py-10 mt-10 font-sans font-bold">
        <CollectionInfo info={info} />
        <CollectionDetail detail={detail} />
      </header>
    </>
  );
}
