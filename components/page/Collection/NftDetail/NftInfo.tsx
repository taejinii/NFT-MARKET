export default function NftInfo({ info }: any) {
  const { collection_name, name, rarity, owner_addresses } = info;
  return (
    <header className="flex flex-col gap-4">
      <span>{collection_name}</span>
      <h1 className="max-md:text-4xl">{name}</h1>
      <span className="truncate">Owned by {owner_addresses}</span>
      {rarity && (
        <span>
          Rank: {rarity.rank}/{rarity.total}
        </span>
      )}
    </header>
  );
}
