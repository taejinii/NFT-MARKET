"use client";
import { motion } from "framer-motion";
import { OpenSeaCollectionListType } from "@/types/types";
import { store, useAppDispatch } from "@/store";
import { addToCart } from "@/store/cartSlice";
export default function CartButton({
  identifier,
  name,
  image_url,
  collection,
  contract,
}: OpenSeaCollectionListType) {
  const dispatch = useAppDispatch();
  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        collection,
        identifier,
        contract,
        image_url,
        name,
      })
    );
  };
  console.log(store.getState().cart.cartList);
  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="flex items-center justify-around h-24 p-2 text-xl font-bold text-white bg-primary rounded-xl"
      onClick={(event) => handleAddToCart(event)}
    >
      <div>Add to Cart</div>
    </motion.button>
  );
}
