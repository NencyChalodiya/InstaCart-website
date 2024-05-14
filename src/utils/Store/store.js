import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Reducers/CartSlice";
import ItemSlice from "../Reducers/ItemSlice";
export const store = configureStore({
  reducer: {
    Items: ItemSlice,
    cartItems: CartSlice,
  },
});
