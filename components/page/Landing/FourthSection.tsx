"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BestCollectionSlider from "./BestCollectionSlider";
import { useGetNftData } from "@/hooks/queries/useGetNftData";
import { useGetCollectionInfo } from "@/hooks/queries/useGetCollectionInfo";
export default function FourthSection() {
  const router = useRouter();
  const bestCollection = "0xed5af388653567af2f388e6224dc7c4b3241c544";
  const { data: nftInfo } = useGetNftData(bestCollection, 10);
  const { data: collectionInfo } = useGetCollectionInfo(bestCollection);
  const [seletedImg, setSelectedImg] = useState(nftInfo?.nfts[0].image);
  const directCollection = (contract: string) => {
    router.push(`/collection/${contract}`);
  };

  return (
    <section className="flex flex-col h-screen bg-white p-14">
      <h1 className="flex flex-col justify-start w-full h-full mb-10 text-3xl font-extrabold uppercase text-primary lg:text-6xl">
        <span>top artist</span>
        <span>collections</span>
      </h1>

      <article className="flex flex-col w-full h-full gap-5 pb-20 lg:gap-10 md:flex-row">
        <Link
          href={`/collection/${collectionInfo?.contracts}`}
          passHref
          className="relative w-full h-96 md:h-full"
        >
          <Image
            src={seletedImg ?? "/images/azuki2.avif"}
            alt="TOP ARTIST COLLECTION"
            priority
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full rounded-xl"
          />
        </Link>

        <div className="flex flex-col  lg:flex-row w-full h-full bg-[#E7F0FF] rounded-xl ">
          <div className="flex flex-col justify-between gap-2 p-10 font-extrabold max-sm:p-4 basis-5/6">
            <div className="flex flex-col text-lg lg:text-3xl 2xl:text-5xl">
              <span>{collectionInfo?.name}</span>
              <span>Azuki #1925</span>
            </div>
            <p className="text-xs 2xl:line-clamp-none line-clamp-[8] over lg:text-base 2xl:text-xl">
              {collectionInfo?.description}
            </p>
            <button
              className="p-2 text-white bg-primary rounded-xl hover:contrast-125"
              onClick={() =>
                directCollection(collectionInfo?.contracts[0] ?? "")
              }
            >
              Collection
            </button>
          </div>

          <div className="flex justify-center w-full h-full p-2 overflow-hidden ">
            <BestCollectionSlider
              data={nftInfo}
              setSelectedImg={setSelectedImg}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
