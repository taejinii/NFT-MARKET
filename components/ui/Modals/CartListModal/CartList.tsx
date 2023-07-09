"use client";
import CartItem from "./CartItem";
import Button from "../../Button";
import { useAppDispatch } from "@/store";
import { clearCart } from "@/store/cartSlice";
import { OpenSeaCollectionListType } from "@/types/types";
export default function CartList({
  isCartEmpty,
  cartList,
}: {
  isCartEmpty: boolean;
  cartList: OpenSeaCollectionListType[];
}) {
  const dispatch = useAppDispatch();
  return (
    <>
      {isCartEmpty ? (
        <div className="flex items-center justify-center w-full h-64 text-xl font-bold text-slate-300 ">
          Add items to get started.
        </div>
      ) : (
        <section className="overflow-auto">
          <div className="flex items-center justify-between font-bold">
            <span>{cartList.length} items</span>
            <Button
              size="sm"
              variant="error"
              onClickAction={() => dispatch(clearCart())}
            >
              Clear list
            </Button>
          </div>
          <ul className="flex flex-col ">
            {cartList.map((cart) => (
              <CartItem key={cart.image_url} {...cart} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
