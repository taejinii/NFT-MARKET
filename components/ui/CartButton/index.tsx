import { motion } from "framer-motion";
export default function CartButton() {
  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="flex items-center justify-around h-24 p-2 text-xl font-bold text-white bg-primary rounded-xl"
      onClick={(event) => {
        event.stopPropagation();
        alert("d");
      }}
    >
      <div>Add to Cart</div>
    </motion.button>
  );
}
