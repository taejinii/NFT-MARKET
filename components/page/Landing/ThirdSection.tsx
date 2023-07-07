"use client";
import Card from "../../ui/Card";
import { useInView } from "react-intersection-observer";
import { useGetNftData } from "@/hooks/queries/useGetNftData";
import { BEST_COLLECTION } from "@/constant/constant";
export default function ThirdSection() {
  const { ref, inView } = useInView({ threshold: 0 });
  const { data: nftData, isLoading } = useGetNftData(BEST_COLLECTION, 3);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center h-screen font-extrabold bg-black "
    >
      <div className="text-center">
        <h1 className="text-[#ECB8F3] text-2xl uppercase max-md:text-xs">
          comming soon
        </h1>
        <article className="flex flex-col gap-2 p-2 text-3xl text-white 2xl:text-5xl">
          <p>Qwero marketplace is a platform where</p>
          <p>individuals can buy,sell, and trade non-fungible</p>
          <p>token(NFT)s. NFTs are unique digital assets that</p>
          <p>are verified on a blockchain network, making</p>
          <p>them secure and tamper-proof.</p>
        </article>
      </div>

      <div className="absolute flex justify-center -top-28 2xl:-top-48">
        {!isLoading &&
          nftData?.nfts.map((nft, index: number) => {
            let animateClass = "";
            if (index === 0) {
              animateClass = "animate-diagonalLeft hover:z-20";
            }
            if (index === 1) {
              animateClass = "z-10";
            }
            if (index === 2) {
              animateClass = "animate-diagonalRight hover:z-20";
            }
            return (
              <div
                key={nft.token_id}
                className={`absolute ${inView ? animateClass : "hidden"} w-64`}
              >
                <Card
                  identifier={nft.token_id}
                  contract={nft.contract_address}
                  image_url={nft.image}
                  name={nft.name}
                  collection={nft.collection_name}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
