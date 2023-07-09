import Cart from "../../../public/icons/Cart.svg";
import { openModal } from "@/store/modalSlice";
import { useAppDispatch } from "@/store";
export default function CartListButton({ itemCount }: { itemCount: number }) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="relative p-2 border-2 rounded-full drop-shadow-lg"
      onClick={() => dispatch(openModal({ modalType: "CartListModal" }))}
      data-cy="cart-list-button"
    >
      {itemCount > 0 && (
        <div className="absolute flex items-center justify-center p-2 text-sm text-white rounded-full w-7 h-7 -right-2 -top-1 bg-primary">
          {itemCount}
        </div>
      )}
      <Cart className="w-8 h-8 " />
    </button>
  );
}
