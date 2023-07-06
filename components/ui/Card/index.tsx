"use client";
import NFTInfo from "./NFTInfo";
import NFTPrice from "./NFTPrice";
import NFTImage from "./NFTImage";
import { useRouter } from "next/navigation";
import { OpenSeaCollectionListType } from "@/types/types";
export default function Card({
  identifier,
  contract,
  image_url,
  name,
  collection,
}: OpenSeaCollectionListType) {
  const invalidNFT =
    identifier?.length > 6 || !identifier || Number(identifier) === 0;
  const router = useRouter();
  const handleRoute = (contract: string, identifier: string) => {
    if (invalidNFT) {
      alert("유효하지 않은 NFT 입니다.");
      return;
    }
    router.push(`/collection/${contract}/${identifier}`);
  };
  console.log(contract, identifier);
  return (
    <div
      onClick={() => handleRoute(contract, identifier)}
      className={`flex flex-col p-3 w-full h-auto  max-h-96 gap-4 rounded-xl bg-[#18191E] ${
        invalidNFT ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <NFTImage image={image_url ?? "/images/error.png"} />
      <NFTInfo
        collection_name={collection}
        name={name}
        invalidNFT={invalidNFT}
        identifier={identifier}
      />
      <NFTPrice invalidNFT={invalidNFT} />
    </div>
  );
}
