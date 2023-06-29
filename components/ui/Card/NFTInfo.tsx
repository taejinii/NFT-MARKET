interface NFTInfo {
  collection_name: string;
  name: string;
}
export default function NFTInfo({ collection_name, name }: NFTInfo) {
  return (
    <div className="flex flex-col items-start gap-2 font-bold">
      <span className="text-[#5E6064] truncate w-full ">{collection_name}</span>
      <span className="text-white">{name}</span>
    </div>
  );
}
