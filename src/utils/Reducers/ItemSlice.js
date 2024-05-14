import { createSlice } from "@reduxjs/toolkit";
import { offersCategory } from "../../data/offers";

const initialState = {
  items: offersCategory,
};

const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    AddItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action?.payload?.id
      );
      if (itemIndex !== -1) {
        if (state?.items[itemIndex]?.qty) {
          state.items[itemIndex].qty += 1;
        } else {
          state.items[itemIndex].qty = 1;
        }
      }
    },
    RemoveItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action?.payload?.id
      );
      if (itemIndex !== -1) {
        if (state?.items[itemIndex]?.qty > 1) {
          state.items[itemIndex].qty -= 1;
        } else {
          delete state.items[itemIndex].qty;
        }
      }
    },

    DeleteTotalItems(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action?.payload?.id
      );
      if (itemIndex !== -1) {
        delete state.items[itemIndex].qty;
      }
    },
  },
});

export const { AddItem, RemoveItem, DeleteTotalItems } = ItemSlice.actions;
export default ItemSlice.reducer;
