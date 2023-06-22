"use client";
import { Dispatch, SetStateAction } from "react";
import { RANKING_FILTER } from "@/constant/constant";
export default function RankingFilter({
  setVolumeFilter,
}: {
  setVolumeFilter: Dispatch<SetStateAction<string>>;
}) {
  const handleVolumeFilter = (filter: string) => {
    setVolumeFilter(filter);
  };
  return (
    <ul className="flex justify-end w-full ">
      {RANKING_FILTER.map((filter) => {
        return (
          <li
            key={filter}
            className="p-2 font-sans font-bold rounded-md text-slate-500 hover:text-black hover:bg-gray-100 drop-shadow-md"
          >
            <button onClick={() => handleVolumeFilter(filter)}>{filter}</button>
          </li>
        );
      })}
    </ul>
  );
}
