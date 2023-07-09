import Image from "next/image";
import Link from "next/link";
import { store } from "@/store";
import { removeCart } from "@/store/cartSlice";
import TrashCan from "../../../../public/icons/TrashCan.svg";
export default function CartItem({ ...cart }) {
  const { name, image_url, collection, contract, identifier, price } = cart;
  const removeItem = (image: string) => {
    store.dispatch(removeCart(image));
  };
  return (
    <li className="flex justify-between w-full p-3 font-bold rounded-lg hover:bg-slate-200">
      <Link
        href={`/collection/${contract}/${identifier}`}
        passHref
        className="flex items-center w-full"
      >
        <div className="relative w-20 h-20 ">
          <Image
            src={image_url}
            alt="name"
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full rounded-lg "
          />
        </div>

        <div className="flex flex-col flex-1 gap-1 ml-2">
          <span>{collection}</span>
          <span>{name ?? identifier}</span>
        </div>
        <div>{price} ETH</div>
      </Link>
      <button
        className="p-2"
        onClick={() => removeItem(image_url)}
        data-cy="remove-button"
      >
        <TrashCan className="w-8 h-8" />
      </button>
    </li>
  );
}
