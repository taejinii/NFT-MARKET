import Link from "next/link";
import { NFTInfo } from "@/types/types";
export default function NftInfo({ info }: { info: NFTInfo }) {
  const {
    collection_name,
    name,
    rarity,
    owner_addresses,
    collection_opensea_slug,
  } = info;

  return (
    <header className="flex flex-col gap-4 font-bold">
      <Link
        className="text-xl w-fit text-primary"
        href={`/collection/${collection_opensea_slug}`}
      >
        {collection_name}
      </Link>
      <h1 className="max-md:text-4xl">{name}</h1>
      <Link href={`/user/${owner_addresses}`} passHref className="truncate">
        <span>Owned by </span>
        <span className="text-primary">{owner_addresses}</span>
      </Link>
      {rarity && (
        <span>
          Rank: {rarity.rank}/{rarity.total}
        </span>
      )}
    </header>
  );
}
