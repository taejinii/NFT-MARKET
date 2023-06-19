import Image from "next/image";
import Link from "next/link";
import Divider from "../Divider";
export default function Card() {
  return (
    <Link
      href={"/"}
      className="flex flex-col p-3 w-full h-full gap-4 rounded-xl bg-[#18191E] cursor-pointer"
    >
      <div className="relative w-full h-56 2xl:h-80 2xl:w-80 rounded-xl">
        <Image
          src="/images/azuki3.avif"
          alt="NFT Image"
          fill
          sizes="100vw"
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col items-start gap-2 font-sans font-bold">
        <span className="text-[#5E6064] truncate  max-w-[256px]">
          Neural Sediments by Eko33
        </span>
        <span className="text-white">Neural Sediments #119</span>
      </div>

      <div className="flex justify-around bg-[#212528] rounded-xl p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#5E6064] font-bold font-sans">Price</div>
          <div className="font-sans font-bold text-white">4.5 ETH</div>
        </div>
        <Divider direction="vertical" />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#5E6064] font-bold font-sans">Last Price</div>
          <div className="font-sans font-bold text-white">2.5 ETH</div>
        </div>
      </div>
    </Link>
  );
}
