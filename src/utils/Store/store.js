import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Reducers/CartSlice";
import ItemSlice from "../Reducers/ItemSlice";
import ProductSlice from "../Reducers/ProductSlice";
export const store = configureStore({
  reducer: {
    Items: ItemSlice,
    cartItems: CartSlice,
    productItems: ProductSlice,
  },
});
