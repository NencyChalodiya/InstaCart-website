import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Reducers/CartSlice";
import ItemSlice from "../Reducers/ItemSlice";
import ProductSlice from "../Reducers/ProductSlice";
import CategorySlice from "../Reducers/CategorySlice";
import SubCategorySlice from "../Reducers/SubCategorySlice";
export const store = configureStore({
  reducer: {
    Items: ItemSlice,
    cartItems: CartSlice,
    productItems: ProductSlice,
    categoryItems: CategorySlice,
    subcategoryItems: SubCategorySlice,
  },
});
