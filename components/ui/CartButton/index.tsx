"use client";
import { motion } from "framer-motion";
import { OpenSeaCollectionListType } from "@/types/types";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/cartSlice";
import { usePathname } from "next/navigation";
export default function CartButton({
  identifier,
  name,
  image_url,
  collection,
  contract,
  price = 0,
}: OpenSeaCollectionListType) {
  const pathname = usePathname();
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
        price,
      })
    );
  };
  if (!pathname.includes("/collection")) return null;
  return (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="absolute bottom-0 z-20 flex items-center justify-center w-full h-24 m-auto text-xl font-bold text-white bg-primary rounded-b-xl"
      onClick={(event) => handleAddToCart(event)}
    >
      <div>Add to Cart</div>
    </motion.button>
  );
}
