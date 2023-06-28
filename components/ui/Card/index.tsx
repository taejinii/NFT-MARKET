import Image from "next/image";
import Link from "next/link";
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
      prefetch={false}
      href={`/collection/${contract_address}/${token_id}`}
      className="flex flex-col p-3 w-full h-auto  max-h-96 gap-4 rounded-xl bg-[#18191E] cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="NFT Image"
          fill
          sizes="100vw"
          placeholder="blur"
          priority
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0cPCpBwAC4QFN8b7mrwAAAABJRU5ErkJggg=="
          className="object-fill duration-200 hover:scale-125"
        />
      </div>

      <div className="flex flex-col items-start gap-2 font-bold">
        <span className="text-[#5E6064] truncate w-full ">
          {collection_name}
        </span>
        <span className="text-white">{name}</span>
      </div>

      <div className="flex flex-col h-24  md:flex-row justify-around bg-[#212528] rounded-xl p-2">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-[#5E6064] font-bold ">Price</div>
          <div className="flex gap-1 font-bold text-white">
            <span>{last_sale ? price_token.toFixed(2) : "ETH"}</span>
            {last_sale ? token_symbol : "ETH"}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
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
