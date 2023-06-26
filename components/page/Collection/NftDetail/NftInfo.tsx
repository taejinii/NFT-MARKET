import Link from "next/link";
export default function NftInfo({ info }: any) {
  const { collection_name, name, rarity, owner_addresses, contract_address } =
    info;

  return (
    <header className="flex flex-col gap-4 font-bold">
      <Link className="text-xl w-fit" href={`/collection/${contract_address}`}>
        {collection_name}
      </Link>
      <h1 className="max-md:text-4xl">{name}</h1>
      <Link
        href={`https://opensea.io/${owner_addresses}`}
        target="_blank"
        className="truncate"
      >
        Owned by {owner_addresses}
      </Link>
      {rarity && (
        <span>
          Rank: {rarity.rank}/{rarity.total}
        </span>
      )}
    </header>
  );
}
