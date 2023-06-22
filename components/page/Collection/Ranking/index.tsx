"use client";
import RankedItem from "./RankedItem";
import RankingFilter from "./RankingFilter";
import { useGetRankData } from "@/hooks/queries/useGetRankData";
import { useState } from "react";
export default function Ranking() {
  const [volumeFilter, setVolumeFilter] = useState<string>("24h");
  const {
    data = { collections: [] },
    isLoading,
    isSuccess,
  } = useGetRankData(volumeFilter);
  return (
    <>
      <RankingFilter setVolumeFilter={setVolumeFilter} />
      <section className="flex flex-col font-sans font-bold">
        <header className="sticky z-50 flex w-full space-x-4 text-base text-gray-500 bg-white top-16">
          <div className="flex-1 grow-[3]">Collection</div>
          <div className="flex-1 text-right ">Volume</div>
          <div className="flex-1 text-right">Floor Price</div>
          <div className="flex-1 text-right">Owner</div>
          <div className="flex-1 text-right">Whale Owner</div>
        </header>
        <ul>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data.collections.map((collection, index: number) => {
              return (
                <RankedItem
                  key={collection.slug}
                  volume_eth={collection.volume_eth}
                  name={collection.name}
                  owner={collection.holder_num}
                  contract={collection.contracts}
                  whale_num={collection.whale_num}
                  logo={collection.logo}
                  floorPrice={collection.floor_price_eth}
                  rank={index}
                />
              );
            })
          )}
        </ul>
      </section>
    </>
  );
}
