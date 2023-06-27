interface TraitsType {
  type: string;
  value: string;
  percentage: number;
}
export default function TraitsList({ traits = [] }: { traits: TraitsType[] }) {
  return (
    <section className="flex flex-col gap-2 mt-2 rounded-md ">
      <h2 className="p-1 text-center border-2 rounded-md">Traits</h2>
      <ul className="grid grid-cols-3 gap-2">
        {traits.map((trait) => {
          return (
            <li
              key={trait.type}
              className="flex flex-col p-1 font-bold text-center border-2 rounded-md hover:bg-slate-200"
            >
              <div className="text-gray-500 ">{trait.type}</div>
              <div className="w-full text-center truncate">{trait.value}</div>
              <div className="font-normal text-gray-500">
                {(trait.percentage * 100).toFixed(0)}%
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
