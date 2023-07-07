interface NFTInfo {
  collection_name: string;
  name: string;
  invalidNFT: boolean;
  identifier: string;
}
export default function NFTInfo({
  collection_name,
  name,
  invalidNFT,
  identifier,
}: NFTInfo) {
  const isExistName = name ?? identifier;
  return (
    <div className="flex flex-col items-start justify-center gap-2 p-2 font-bold">
      <span className="text-[#5E6064] truncate w-full ">{collection_name}</span>
      <span className="text-white">
        {invalidNFT ? "invalid NFT" : isExistName}
      </span>
    </div>
  );
}
