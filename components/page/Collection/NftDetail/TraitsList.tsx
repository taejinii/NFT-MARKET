import { OpenSeaTraitsType } from "@/types/types";
export default function TraitsList({
  traits = [],
}: {
  traits: OpenSeaTraitsType[];
}) {
  return (
    <section className="flex flex-col gap-2 mt-2 rounded-md ">
      <h2 className="p-1 font-bold text-center border-2 rounded-md">Traits</h2>
      <ul className="grid grid-cols-3 gap-2">
        {traits.map((trait) => {
          const rarityTrait = (trait.trait_count * 0.01).toFixed(2);
          return (
            <li
              key={trait.trait_type}
              className="flex flex-col p-1 font-bold text-center border-2 rounded-md hover:bg-slate-200"
            >
              <div className="text-gray-500 truncate">{trait.trait_type}</div>
              <div className="w-full text-center truncate">{trait.value}</div>
              <div className="font-normal text-gray-500">{rarityTrait}%</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
