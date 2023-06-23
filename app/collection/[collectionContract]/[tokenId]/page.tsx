import Image from "next/image";
import { getNFTInfoDetail } from "@/api/CollectionAPI";
import NftInfo from "@/components/page/Collection/NftDetail/NftInfo";
import TraitsList from "@/components/page/Collection/NftDetail/TraitsList";

interface ParamsType {
  collectionContract: string;
  tokenId: string;
}

export default async function NFTDetail({ params }: { params: ParamsType }) {
  const { collectionContract, tokenId } = params;
  const info = await getNFTInfoDetail(collectionContract, tokenId);
  const { image, traits } = info;
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 m-auto max-w-7xl">
      <section className="flex w-full">
        <div className="pr-4 border-r-2 border-black ">
          <NftInfo info={info} />
          <TraitsList traits={traits} />
        </div>
        <div className="flex items-center justify-center w-full ">
          <Image
            src={image}
            alt="NFT Image"
            width={600}
            height={600}
            className="rounded-md drop-shadow"
          />
        </div>
      </section>

      <div className="flex items-start justify-start w-full">1</div>
    </div>
  );
}
