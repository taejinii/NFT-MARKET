import Image from "next/image";
import Link from "next/link";
import Divider from "../Divider";
export default function Card({ ...nft }) {
  const {
    collection_name,
    last_sale,
    image,
    name,
    contract_address,
    token_id,
  } = nft;
  const { token_symbol, price_token } = last_sale;
  return (
    <Link
      href={`/collection/${contract_address}/${token_id}`}
      className="flex flex-col p-3 w-60 md:w-full h-full gap-4 rounded-xl bg-[#18191E] cursor-pointer"
    >
      <div className="relative w-full h-32 overflow-hidden md:h-40 2xl:h-80 rounded-xl hover:scale-105">
        <Image
          src={image}
          alt="NFT Image"
          fill
          sizes="100vw"
          className="object-fill duration-300 rounded-xl hover:scale-125"
        />
      </div>

      <div className="flex flex-col items-start gap-2 font-bold">
        <span className="text-[#5E6064] truncate w-40 md:w-52">
          {collection_name}
        </span>
        <span className="text-white">{name}</span>
      </div>

      <div className="flex justify-around bg-[#212528] rounded-xl p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#5E6064] font-bold ">Price</div>
          <div className="flex gap-1 font-bold text-white">
            <span>{last_sale ? price_token.toFixed(2) : "ETH"}</span>
            {last_sale ? token_symbol : "ETH"}
          </div>
        </div>
        <Divider direction="vertical" />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#5E6064] font-bold ">Last Price</div>
          <div className="flex gap-1 font-bold text-white">
            <span>4.5</span>

            {last_sale ? token_symbol : "ETH"}
          </div>
        </div>
      </div>
    </Link>
  );
}
