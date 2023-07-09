import Link from "next/link";
import { OpenSeaNFTInfo } from "@/types/types";
export default function NftInfo({ info }: { info: OpenSeaNFTInfo }) {
  const { collection, top_ownerships, name, token_id } = info;
  const { owner } = top_ownerships[0];
  return (
    <header className="flex flex-col gap-4 font-bold">
      <Link
        className="text-xl w-fit text-primary"
        href={`/collection/${collection.slug}`}
      >
        {collection.name}
      </Link>
      <h1 className="max-md:text-4xl">{name ?? token_id}</h1>
      <Link href={`/user/${owner.address}`} passHref className="truncate">
        <span>Owned by </span>
        <span className="text-primary">
          {owner.user?.username ?? owner.address}
        </span>
      </Link>
      {/* {rarity && (
        <span>
          Rank: {rarity.rank}/{rarity.total}
        </span>
      )} */}
    </header>
  );
}
