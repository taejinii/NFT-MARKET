import Link from "next/link";
import NFTInfo from "./NFTInfo";
import NFTPrice from "./NFTPrice";
import NFTImage from "./NFTImage";
export default function Card({ ...nft }) {
  const {
    collection_name,
    last_sale,
    image,
    name,
    contract_address,
    token_id,
  } = nft;
  return (
    <Link
      passHref
      prefetch={false}
      href={`/collection/${contract_address}/${token_id}`}
      className="flex flex-col p-3 w-full h-auto  max-h-96 gap-4 rounded-xl bg-[#18191E] cursor-pointer"
    >
      <NFTImage image={image} />
      <NFTInfo collection_name={collection_name} name={name} />
      <NFTPrice last_sale={last_sale} />
    </Link>
  );
}
