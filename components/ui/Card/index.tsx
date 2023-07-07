"use client";
import NFTInfo from "./NFTInfo";
import NFTPrice from "./NFTPrice";
import NFTImage from "./NFTImage";
import CartButton from "../CartButton";
import { useState } from "react";
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
  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleActiveCart = () => {
    setIsMouseHover(true);
  };
  const handleInactiveCart = () => {
    setIsMouseHover(false);
  };

  const handleRoute = (contract: string, identifier: string) => {
    if (invalidNFT) {
      alert("유효하지 않은 NFT 입니다.");
      return;
    }
    router.push(`/collection/${contract}/${identifier}`);
  };
  return (
    <div
      onMouseOver={handleActiveCart}
      onMouseOut={handleInactiveCart}
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
      {!isMouseHover && <NFTPrice invalidNFT={invalidNFT} />}
      {isMouseHover && <CartButton />}
    </div>
  );
}
