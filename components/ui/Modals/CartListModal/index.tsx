"use client";
import useOutsideClick from "@/hooks/common/useOutSideClick";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { clearCart } from "@/store/cartSlice";
import { motion } from "framer-motion";
import { useRef } from "react";
import Button from "../../Button";
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
  const totalPrice = cartList.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  const isCartEmpty = cartList.length === 0;
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
        <button className="p-2" onClick={clearCartList}>
          Clear list
        </button>
      </div>
      <section className="overflow-auto">
        <ul className="flex flex-col">
          {cartList.map((cart) => (
            <CartItem key={cart.image_url} {...cart} />
          ))}
        </ul>
      </section>
      <div className="flex items-center justify-between w-full pt-4 text-xl font-bold border-t-2">
        <span>Total Price</span>
        <span>{totalPrice.toFixed(2)} ETH</span>
      </div>
      <Button
        size="lg"
        variant="primary"
        disabled={isCartEmpty}
        onClickAction={() => alert("동작 확인 테스트")}
      >
        Complete purchase
      </Button>
    </motion.aside>
  );
}
