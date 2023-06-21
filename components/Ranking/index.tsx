"use client";
import RankedItem from "./RankedItem";
import { useGetRankData } from "@/hooks/queries/useGetRankData";
export default function Ranking() {
  const { data, isLoading, isSuccess } = useGetRankData();
  return (
    <section className="flex flex-col pt-10">
      <header className="sticky z-50 flex w-full space-x-4 text-base bg-white top-16">
        <div className="flex-1 grow-[3]">Collection</div>
        <div className="flex-1 text-right ">Volume</div>
        <div className="flex-1 text-right">Sales</div>
        <div className="flex-1 text-right">Owners</div>
        <div className="flex-1 text-right">Items</div>
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
