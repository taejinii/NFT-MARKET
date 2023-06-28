"use client";
import Image from "next/image";
import Link from "next/link";

export default function RankedItem({ ...props }) {
  const {
    volume_eth,
    name,
    logo,
    owner,
    floorPrice,
    whale_num,
    contract,
    rank,
  } = props;
  return (
    <>
      <li className="flex items-center p-2 py-2 text-sm hover:bg-gray-200 hover:rounded-xl">
        <Link
          href={`/collection/${contract}`}
          className="flex w-full space-x-4"
        >
          <div className="flex items-center flex-1 grow-[3]">
            <div className="w-10 text-gray-500">{rank + 1}</div>

            <div className="relative w-12 h-12">
              <Image
                src={logo}
                alt="Ranked NFT Image"
                fill
                placeholder="blur"
                priority
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0cPCpBwAC4QFN8b7mrwAAAABJRU5ErkJggg=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute object-cover rounded-full drop-shadow-lg"
              />
            </div>

            <div className="flex flex-col flex-1 ml-3 text-base">
              {name}
              <div className="text-xs text-gray-500 md:hidden">
                Floor {floorPrice.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="flex-1 hidden text-right md:block">
            {volume_eth.toFixed(2)} E
          </div>
          <div className="flex-1 hidden text-right md:block">
            {floorPrice.toFixed(2)} E
          </div>
          <div className="flex-1 hidden text-right md:block">{owner}</div>
          <div className="flex flex-col flex-1 text-right">
            <div className="hidden md:block">{whale_num}</div>
            <div className="text-xs text-gray-500 md:hidden">
              vol. {volume_eth.toFixed(2)}E
            </div>
          </div>
        </Link>
      </li>
      <hr className="mx-2" />
    </>
  );
}
