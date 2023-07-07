import Cart from "../../../public/icons/Cart.svg";

export default function CartListButton({ itemCount }: { itemCount: number }) {
  return (
    <button className="relative p-2 border-2 rounded-full drop-shadow-lg">
      {itemCount > 0 && (
        <div className="absolute flex items-center justify-center p-2 text-sm text-white rounded-full w-7 h-7 -right-2 -top-1 bg-primary">
          {itemCount}
        </div>
      )}
      <Cart className="w-8 h-8 " />
    </button>
  );
}
