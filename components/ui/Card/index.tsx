import Link from "next/link";
import NFTInfo from "./NFTInfo";
import NFTPrice from "./NFTPrice";
import NFTImage from "./NFTImage";
export default function Card({ ...nft }) {
  const { identifier, contract, image_url, name, collection } = nft;

  return (
    <Link
      passHref
      prefetch={false}
      href={`/collection/${contract}/${identifier}`}
      className="flex flex-col p-3 w-full h-auto  max-h-96 gap-4 rounded-xl bg-[#18191E] cursor-pointer"
    >
      <NFTImage image={image_url} />
      <NFTInfo collection_name={collection} name={name} />
      <NFTPrice />
    </Link>
  );
}
