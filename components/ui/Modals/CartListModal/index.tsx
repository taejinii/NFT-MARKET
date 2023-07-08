"use client";
import useOutsideClick from "@/hooks/common/useOutSideClick";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { clearCart } from "@/store/cartSlice";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function CartListModal() {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);
  const ref = useRef(null);
  useOutsideClick(ref);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const clearCartList = () => {
    dispatch(clearCart());
  };
  return (
    <motion.aside
      className="fixed right-0 z-50 flex flex-col h-full gap-5 p-4 bg-white w-[450px]"
      ref={ref}
    >
      <header className="flex justify-between w-full py-2 border-b-2">
        <h2>Cart</h2>
        <button onClick={handleCloseModal}>x</button>
      </header>
      <div className="flex items-center justify-between font-bold">
        <span>{cartList.length} items</span>
        <button onClick={clearCartList}>Clear list</button>
      </div>
      <section className="overflow-auto">
        <ul className="flex flex-col">
          {cartList.map((cart) => (
            <CartItem key={cart.image_url} {...cart} />
          ))}
        </ul>
      </section>
    </motion.aside>
  );
}
