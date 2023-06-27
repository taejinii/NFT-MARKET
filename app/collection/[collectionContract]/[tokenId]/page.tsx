import Image from "next/image";
import { getNFTInfoDetail, getSaleHistory } from "@/api/CollectionAPI";
import NftInfo from "@/components/page/Collection/NftDetail/NftInfo";
import TraitsList from "@/components/page/Collection/NftDetail/TraitsList";
import Accordion from "@/components/ui/Accordion/index";
import SaleHistoy from "@/components/page/Collection/SaleHistory/SaleHistoy";
import { Metadata } from "next";

interface ParamsType {
  collectionContract: string;
  tokenId: string;
}
export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const { tokenId, collectionContract } = params;
  const info = await getNFTInfoDetail(collectionContract, tokenId);
  return {
    metadataBase: new URL("https://nft-market-taejinii.vercel.app/"),
    title: `${info.name} - ${info.collection_name} | QWERO`,
    description: info.collection_name,
    openGraph: {
      images: { url: info.image, alt: info.name },
      title: info.name,
      description: `Get Your NFT Right Now! - ${info.collection_name}`,
      url: `/collection/${collectionContract}/${tokenId}`,
    },
  };
}

export default async function NFTDetail({ params }: { params: ParamsType }) {
  const { collectionContract, tokenId } = params;
  console.log(params);
  const [info, history] = await Promise.all([
    getNFTInfoDetail(collectionContract, tokenId),
    getSaleHistory(collectionContract, tokenId),
  ]);
  const { image, traits } = info;
  return (
    <div className="flex flex-col w-full gap-5 py-10 m-auto max-w-7xl">
      <section className="flex flex-col w-full gap-5 md:flex-row">
        <div className="w-full pr-4 max-md:order-2">
          <NftInfo info={info} />
          <TraitsList traits={traits} />
        </div>

        <div className="flex items-center justify-center w-full max-md:order-1">
          <Image
            src={image}
            alt="NFT Image"
            width={600}
            height={600}
            priority
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0cPCpBwAC4QFN8b7mrwAAAABJRU5ErkJggg=="
            className="w-full h-auto rounded-md drop-shadow "
          />
        </div>
      </section>
      <Accordion title="Item Activity">
        <SaleHistoy history={history} />
      </Accordion>
    </div>
  );
}
