"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { RANKING_FILTER } from "@/constant/constant";
export default function RankingFilter({
  setVolumeFilter,
}: {
  setVolumeFilter: Dispatch<SetStateAction<string>>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVolumeFilter = (filter: string, index: number) => {
    setVolumeFilter(filter);
    setActiveIndex(index);
  };
  return (
    <ul className="flex justify-end w-full ">
      {RANKING_FILTER.map((filter, index) => {
        return (
          <li
            key={filter}
            className={`font-sans font-bold rounded-md ${
              index === activeIndex ? "text-black" : "text-slate-500"
            } hover:text-black hover:bg-gray-100 drop-shadow-md `}
          >
            <button
              className="p-2 "
              onClick={() => handleVolumeFilter(filter, index)}
            >
              {filter}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
