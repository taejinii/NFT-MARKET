import { toast } from "react-toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartListType {
  identifier: string;
  contract: string;
  image_url: string;
  name: string;
  collection: string;
  price: number;
}
interface CartList {
  cartList: CartListType[];
}

const initialState: CartList = {
  cartList: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartListType>) => {
      const isDuplicate = state.cartList.some((cart) => {
        return (
          cart.collection === action.payload.collection &&
          cart.identifier === action.payload.identifier
        );
      });
      if (isDuplicate) {
        alert("이미 담긴 아이템 입니다.");
      } else {
        state.cartList.push(action.payload);
        toast("Added to Cart", { icon: "✅" });
      }
    },
    removeCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (cart) => cart.identifier !== action.payload
      );
      toast("Removed the item", { icon: "✅" });
    },
    clearCart: (state) => {
      state.cartList = [];
      toast("Cleared the list", { icon: "✅" });
    },
  },
});
export const { addToCart, clearCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
