"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BestCollectionSlider from "./BestCollectionSlider";
import { useGetNftData } from "@/hooks/queries/useGetNftData";
import { useGetCollectionInfo } from "@/hooks/queries/useGetCollectionInfo";
import { BEST_COLLECTION } from "@/constant/constant";

export default function FourthSection() {
  const router = useRouter();
  const { data: nftInfo } = useGetNftData(BEST_COLLECTION, 10);
  const { data: collectionInfo } = useGetCollectionInfo("azuki");
  const [selectedItem, setSelectedItem] = useState({
    name: nftInfo?.nfts[0].name,
    image: nftInfo?.nfts[0].image,
  });
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
          href={`/collection/${collectionInfo?.collection.slug}`}
          passHref
          className="relative w-full h-96 md:h-full"
        >
          <Image
            src={selectedItem.image ?? "/images/azuki2.avif"}
            alt={"Best NFT Image"}
            priority
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full rounded-xl"
          />
        </Link>

        <div className="flex flex-col  lg:flex-row w-full h-full bg-[#E7F0FF] rounded-xl ">
          <div className="flex flex-col justify-between gap-2 p-10 font-extrabold max-sm:p-4 basis-5/6">
            <div className="flex flex-col text-lg lg:text-3xl 2xl:text-5xl">
              <span>{collectionInfo?.collection.name}</span>
              <span>{selectedItem.name}</span>
            </div>
            <p className="text-xs 2xl:line-clamp-none line-clamp-[8] over lg:text-base 2xl:text-xl">
              {collectionInfo?.collection.description}
            </p>
            <button
              className="p-2 text-white bg-primary rounded-xl hover:contrast-125"
              onClick={() =>
                directCollection(
                  collectionInfo?.collection.slug ?? "/collection"
                )
              }
            >
              Collection
            </button>
          </div>

          <div
            className="flex justify-center w-full h-full p-2 overflow-hidden "
            data-cy="carousel"
          >
            <BestCollectionSlider
              data={nftInfo}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
