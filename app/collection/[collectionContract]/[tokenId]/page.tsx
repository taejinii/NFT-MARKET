import Image from "next/image";
import { getNFTInfoDetail } from "@/api/CollectionAPI";
export default async function NFTDetail({ params }: any) {
  const { collectionContract, tokenId } = params;
  const info = await getNFTInfoDetail(collectionContract, tokenId);
  const { collection_name, name, image, traits, rarity, owner_addresses } =
    info;
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <section className="flex">
        <div className="p-2 border-r-2 border-black">
          <header className="flex flex-col gap-4">
            <span>{collection_name}</span>
            <h1>{name}</h1>
            <span>Owned by {owner_addresses}</span>
            <span>
              Rank: {rarity.rank}/{rarity.total}
            </span>
          </header>
          <div className="flex flex-col gap-2 p-2 rounded-md ">
            <h2 className="p-1 text-center border-2 border-black rounded-md">
              Trait
            </h2>
            <section className="grid grid-cols-3 gap-2">
              {traits.map((trait: any) => {
                return (
                  <div
                    key={trait.type}
                    className="flex flex-col text-center border-[1px] border-black rounded-md hover:bg-slate-200 p-1"
                  >
                    <div>{trait.type}</div>
                    <div className="w-full text-center truncate">
                      {trait.value}
                    </div>
                    <div>{trait.percentage}%</div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <Image
            src={image}
            alt="NFT Image"
            width={600}
            height={600}
            className="rounded-md drop-shadow"
          />
        </div>
      </section>
    </div>
  );
}
