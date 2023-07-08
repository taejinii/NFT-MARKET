import Image from "next/image";
import Link from "next/link";
import { store } from "@/store";
import { removeCart } from "@/store/cartSlice";
export default function CartItem({ ...cart }) {
  const { name, image_url, collection, contract, identifier } = cart;
  const removeItem = (image: string) => {
    store.dispatch(removeCart(image));
  };
  return (
    <li className="flex justify-between w-full p-3 font-bold rounded-lg hover:bg-slate-200">
      <Link
        href={`/collection/${contract}/${identifier}`}
        passHref
        className="flex items-center w-full gap-2"
      >
        <div className="relative w-20 h-20 ">
          <Image
            src={image_url}
            alt="name"
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full rounded-md drop-shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-1">
          <span>{collection}</span>
          <span>{name}</span>
        </div>
      </Link>
      <button onClick={() => removeItem(image_url)}>삭제</button>
    </li>
  );
}
