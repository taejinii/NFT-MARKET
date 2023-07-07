import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartListType {
  identifier: string;
  contract: string;
  image_url: string;
  name: string;
  collection: string;
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
      const isDuplicate = state.cartList.some(
        (cart) => cart.image_url === action.payload.image_url
      );
      if (isDuplicate) {
        alert("이미 담긴 아이템 입니다.");
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.cartList.filter(
        (cart) => cart.identifier !== action.payload.idenrifier
      );
    },
    clearCart: (state) => {
      state.cartList = [];
    },
  },
});
export const { addToCart, clearCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
