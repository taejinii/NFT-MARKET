"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { OpenSeaNFTInfo } from "@/types/types";
import { store } from "@/store";
import { addToCart } from "@/store/cartSlice";
export default function NftInfo({ info }: { info: OpenSeaNFTInfo }) {
  const { collection, top_ownerships, name, token_id } = info;
  const { owner } = top_ownerships[0];
  console.log(top_ownerships);
  const handleAddToCart = () => {
    store.dispatch(
      addToCart({
        image_url: info.image_url,
        identifier: info.token_id,
        contract: info.asset_contract.address,
        name: info.name,
        collection: info.collection.name,
        price: 1,
      })
    );
  };
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
      <div className="flex items-center w-full gap-2">
        <Button fullWidth size="lg" onClickAction={handleAddToCart}>
          Add to Cart
        </Button>
        <p className="w-full py-4 text-center border-2 rounded-lg hover:bg-slate-300">
          Price : 1 ETH
        </p>
      </div>
    </header>
  );
}
