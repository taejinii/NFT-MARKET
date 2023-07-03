import { CollectionDetails } from "@/types/types";
import { handleForamtNumber } from "@/utils/handleFormatNumber";
export default function CollectionDetail({
  detail,
}: {
  detail: CollectionDetails;
}) {
  const { total_supply, holder_num, floor_price, volume_eth } = detail;

  return (
    <ul className="flex flex-wrap">
      <li className="flex flex-col gap-2 p-4 border-r-2 border-gray-400">
        <div className="text-base font-normal uppercase">items</div>
        <div className="text-4xl max-sm:text-2xl">
          {handleForamtNumber(total_supply)}
        </div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-r-2 border-gray-400">
        <div className="text-base font-normal uppercase">owners</div>
        <div className="text-4xl max-sm:text-2xl"> {holder_num}</div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-r-2 border-gray-400">
        <div className="text-base font-normal uppercase">volume</div>
        <div className="text-4xl max-sm:text-2xl">
          {handleForamtNumber(volume_eth.all)} E
        </div>
      </li>
      <li className="flex flex-col gap-2 p-4">
        <div className="text-base font-normal uppercase">floor</div>
        <div className="text-4xl max-sm:text-2xl">
          {floor_price?.value.toFixed(2)} E
        </div>
      </li>
    </ul>
  );
}
