import Image from "next/image";
import { getNFTInfoDetail } from "@/api/CollectionAPI";
import NftInfo from "@/components/page/Collection/NftDetail/NftInfo";
import TraitsList from "@/components/page/Collection/NftDetail/TraitsList";
import Accordion from "@/components/ui/Accordion/index";
interface ParamsType {
  collectionContract: string;
  tokenId: string;
}

export default async function NFTDetail({ params }: { params: ParamsType }) {
  const { collectionContract, tokenId } = params;
  const info = await getNFTInfoDetail(collectionContract, tokenId);
  const { image, traits } = info;
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 py-10 m-auto max-w-7xl">
      <section className="flex flex-col w-full gap-5 md:flex-row">
        <div className="pr-4 border-r-2 border-black max-md:order-2">
          <NftInfo info={info} />
          <TraitsList traits={traits} />
        </div>
        <div className="flex items-center justify-center w-full max-md:order-1">
          <Image
            src={image}
            alt="NFT Image"
            width={600}
            height={600}
            className="rounded-md drop-shadow"
          />
        </div>
      </section>
      <Accordion title="Item Activity">
        <div className="w-full border-b-[1px] p-4 border-black">1</div>
      </Accordion>
    </div>
  );
}
