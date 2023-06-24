interface TraitsType {
  type: string;
  value: string;
  percentage: number;
}
export default function TraitsList({ traits }: { traits: TraitsType[] }) {
  return (
    <section className="flex flex-col gap-2 mt-2 rounded-md ">
      <h2 className="p-1 text-center border-2 border-black rounded-md">
        Traits
      </h2>
      <ul className="grid grid-cols-3 gap-2">
        {traits.map((trait: any) => {
          return (
            <li
              key={trait.type}
              className="flex flex-col text-center border-[1px] border-black rounded-md hover:bg-slate-200 p-1"
            >
              <div>{trait.type}</div>
              <div className="w-full text-center truncate">{trait.value}</div>
              <div>{trait.percentage}%</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
