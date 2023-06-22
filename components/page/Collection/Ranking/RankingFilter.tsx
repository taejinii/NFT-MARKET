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
    <ul className="flex justify-end w-full gap-2">
      {RANKING_FILTER.map((filter) => {
        return (
          <li
            key={filter}
            className="p-2 font-sans font-bold text-gray-200 rounded-md hover:text-black hover:bg-gray-100"
          >
            <button onClick={() => handleVolumeFilter(filter)}>{filter}</button>
          </li>
        );
      })}
    </ul>
  );
}
