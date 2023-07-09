"use client";
import useOutsideClick from "@/hooks/common/useOutSideClick";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { clearCart } from "@/store/cartSlice";
import { motion } from "framer-motion";
import { useRef } from "react";
import Button from "../../Button";
import CartList from "./CartList";
export default function CartListModal() {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);
  const ref = useRef(null);
  useOutsideClick(ref);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const totalPrice = cartList.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  const isCartEmpty = cartList.length === 0;
  return (
    <motion.aside
      className="fixed right-0 z-50 flex flex-col h-full gap-5 p-4 bg-white w-[450px]"
      ref={ref}
      data-cy="cartList-modal"
    >
      <header className="flex justify-between w-full py-2 border-b-2">
        <h2>Cart</h2>
        <button onClick={handleCloseModal}>x</button>
      </header>
      <CartList isCartEmpty={isCartEmpty} cartList={cartList} />
      {!isCartEmpty && (
        <div className="flex items-center justify-between w-full pt-2 text-xl font-bold border-t-2">
          <span>Total Price</span>
          <span>{totalPrice.toFixed(2)} ETH</span>
        </div>
      )}

      <Button
        size="lg"
        variant="primary"
        disabled={isCartEmpty}
        onClickAction={() => dispatch(clearCart())}
      >
        Complete purchase
      </Button>
    </motion.aside>
  );
}
