import Image from "next/image";
import Azuki from "../../public/images/azuki1.png";
import Link from "next/link";
import Divider from "../Divider";
export default function Card() {
  return (
    <Link
      href={"/"}
      className="flex flex-col p-3 w-fit max-w-xs gap-4 rounded-xl bg-[#18191E] cursor-pointer"
    >
      <div className="relative w-64 rounded-xl h-72 ">
        <Image src={Azuki} alt="NFT Image" fill className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-2 font-sans font-bold">
        <span className="text-[#5E6064]">Neural Sediments by Eko33</span>
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
