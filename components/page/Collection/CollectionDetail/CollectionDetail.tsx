import { CollectionDetails } from "@/types/types";
import { handleForamtNumber } from "@/utils/handleFormatNumber";
export default function CollectionDetail({ stats }: { stats: any }) {
  const { total_supply, floor_price, num_owners, total_volume } = stats;

  return (
    <ul className="flex flex-wrap gap-1 responsive-container">
      <li className="flex flex-col gap-2 p-4 border-2 rounded-md">
        <div className="text-base font-normal uppercase">items</div>
        <div className="text-4xl max-sm:text-2xl">
          {handleForamtNumber(total_supply)}
        </div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-2 rounded-md">
        <div className="text-base font-normal uppercase">owners</div>
        <div className="text-4xl max-sm:text-2xl"> {num_owners}</div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-2 rounded-md">
        <div className="text-base font-normal uppercase">volume</div>
        <div className="text-4xl max-sm:text-2xl">
          {handleForamtNumber(total_volume)}
        </div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-2 rounded-md">
        <div className="text-base font-normal uppercase">floor</div>
        <div className="text-4xl max-sm:text-2xl">
          {handleForamtNumber(floor_price)}E
        </div>
      </li>
    </ul>
  );
}
