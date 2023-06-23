export default function NftInfo({ info }: any) {
  const { collection_name, name, rarity, owner_addresses } = info;
  return (
    <header className="flex flex-col gap-4">
      <span>{collection_name}</span>
      <h1>{name}</h1>
      <span>Owned by {owner_addresses}</span>
      <span>
        Rank: {rarity.rank}/{rarity.total}
      </span>
    </header>
  );
}
