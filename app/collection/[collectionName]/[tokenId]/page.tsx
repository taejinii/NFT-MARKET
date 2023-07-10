import Image from "next/image";
import { getNFTInfoOpenSea, getSaleHistory } from "@/api/CollectionAPI";
import NftInfo from "@/components/page/Collection/NftDetail/NftInfo";
import TraitsList from "@/components/page/Collection/NftDetail/TraitsList";
import Accordion from "@/components/ui/Accordion/index";
import SaleHistoy from "@/components/page/Collection/SaleHistory/SaleHistoy";
import { Metadata } from "next";
import { BLUR_DATA_URL } from "@/constant/constant";

interface ParamsType {
  collectionName: string;
  tokenId: string;
}
export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const { tokenId, collectionName } = params;
  const info = await getNFTInfoOpenSea(collectionName, tokenId);

  return {
    title: `${info.name ?? info.token_id} - ${info.collection.name} | QWERO`,
    description: `${info.collection.name} - ${
      info.name ?? info.token_id
    } 입니다.`,
    openGraph: {
      images: { url: info.image_url, alt: info.collection.name },
      title: info.name,
      description: `Get Your NFT Right Now! - ${info.collection.name}`,
      url: `/collection/${collectionName}/${tokenId}`,
    },
  };
}
export default async function NFTDetailPage({
  params,
}: {
  params: ParamsType;
}) {
  const { collectionName, tokenId } = params;

  const [info, history] = await Promise.all([
    getNFTInfoOpenSea(collectionName, tokenId),
    getSaleHistory(collectionName, tokenId),
  ]);

  return (
    <div className="flex flex-col w-full gap-5 p-20 m-auto responsive-container max-w-7xl ">
      <section className="flex flex-col w-full gap-5 md:flex-row">
        <div className="flex flex-col w-full gap-2 max-md:order-2">
          <NftInfo info={info} />
          <TraitsList traits={info.traits} />
        </div>
        <div className="flex items-center justify-center w-full max-md:order-1">
          <Image
            src={info.image_url}
            alt="NFT Image"
            width={600}
            height={600}
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="w-full h-auto rounded-md drop-shadow-lg "
          />
        </div>
      </section>
      <Accordion title="Item Activity">
        <SaleHistoy history={history} />
      </Accordion>
    </div>
  );
}
