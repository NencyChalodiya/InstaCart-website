import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "../Reducers/ItemSlice";

export const store = configureStore({
  reducer: {
    Items: ItemSlice,
  },
});
