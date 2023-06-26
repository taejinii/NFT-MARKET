export default function CollectionDetail({ detail }: any) {
  const { total_supply, holder_num, floor_price, volume_eth } = detail;
  return (
    <ul className="flex flex-wrap">
      <li className="flex flex-col gap-2 p-4 border-r-2 border-gray-400">
        <div className="text-base font-normal uppercase">items</div>
        <div className="text-4xl"> {total_supply}</div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-r-2 border-gray-400">
        <div className="text-base font-normal uppercase">owners</div>
        <div className="text-4xl"> {holder_num}</div>
      </li>
      <li className="flex flex-col gap-2 p-4 border-r-2 border-gray-400">
        <div className="text-base font-normal uppercase">volume</div>
        <div className="text-4xl">{volume_eth.all.toFixed(2)} ETH</div>
      </li>
      <li className="flex flex-col gap-2 p-4">
        <div className="text-base font-normal uppercase">floor</div>
        <div className="text-4xl">{floor_price.value.toFixed(2)} ETH</div>
      </li>
    </ul>
  );
}
