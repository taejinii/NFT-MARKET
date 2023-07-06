"use client";
import RankedItem from "./RankedItem";
import RankingFilter from "./RankingFilter";
import { useGetRankData } from "@/hooks/queries/useGetRankData";
import { useState } from "react";
import RankingListLoading from "@/components/ui/Skeleton/RankingListLoading";
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
      <section className="flex flex-col font-bold" data-cy="collection-ranking">
        <header className="sticky z-30 hidden w-full space-x-4 text-base text-gray-500 bg-white top-16 md:flex">
          <div className="flex-1 grow-[3]">Collection</div>
          <div className="flex-1 text-right ">Volume</div>
          <div className="flex-1 text-right">Floor Price</div>
          <div className="flex-1 text-right">Owner</div>
          <div className="flex-1 text-right">Whale Owner</div>
        </header>
        <ul>
          {isLoading ? (
            <RankingListLoading />
          ) : (
            data.collections?.map((collection, index: number) => {
              return (
                <RankedItem
                  key={collection.opensea_slug}
                  volume_eth={collection.volume_eth}
                  name={collection.name}
                  owner={collection.holder_num}
                  contract={collection.contracts}
                  whale_num={collection.whale_num}
                  logo={collection.logo}
                  floorPrice={collection.floor_price_eth}
                  opensea_slug={collection.opensea_slug}
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
