import Image from "next/image";
import { BLUR_DATA_URL } from "@/constant/constant";
export default function NFTImage({ image }: { image: string }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-xl ">
      <Image
        src={image}
        alt="NFT Image"
        fill
        sizes="100vw"
        placeholder="blur"
        priority
        blurDataURL={BLUR_DATA_URL}
        className="object-fill duration-200 hover:scale-125 "
      />
    </div>
  );
}
