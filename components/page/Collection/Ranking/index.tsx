"use client";
import RankedItem from "./RankedItem";
import { useGetRankData } from "@/hooks/queries/useGetRankData";
export default function Ranking() {
  const { data, isLoading, isSuccess } = useGetRankData();
  return (
    <section className="flex flex-col font-sans font-bold">
      <header className="sticky z-50 flex w-full space-x-4 text-base text-gray-500 bg-white top-16">
        <div className="flex-1 grow-[3]">Collection</div>
        <div className="flex-1 text-right ">Volume</div>
        <div className="flex-1 text-right">Floor Price</div>
        <div className="flex-1 text-right">Owner</div>
        <div className="flex-1 text-right">Whale Owner</div>
      </header>
      <ul>
        {isSuccess &&
          data.collections.map((collection: any, index: number) => {
            return (
              <RankedItem key={collection.slug} {...collection} rank={index} />
            );
          })}
      </ul>
    </section>
  );
}
