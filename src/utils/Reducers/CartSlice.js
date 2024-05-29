import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  giftOption: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCart(state, action) {
      if (state.cartItems.find((item) => item.id === action?.payload?.id)) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action?.payload?.id
        );
        if (itemIndex !== -1) {
          if (state?.cartItems[itemIndex]?.qty) {
            state.cartItems[itemIndex].qty += 1;
          }
        }
      } else {
        const payload = {
          ...action.payload,
          qty: 1,
        };
        state.cartItems.push(payload);
      }
    },
    RemoveItemFromCart(state, action) {
      if (
        state.cartItems.find((item) => item.id === action?.payload?.id) &&
        state.cartItems.find((item) => item.id === action?.payload?.id).qty > 1
      ) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action?.payload?.id
        );
        if (itemIndex !== -1) {
          if (state?.cartItems[itemIndex]?.qty) {
            state.cartItems[itemIndex].qty -= 1;
          }
        }
      } else {
        const filterItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = filterItems;
      }
    },

    DeleteParticularItemFromCart(state, action) {
      const filterItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filterItems;
    },
    UpdateGiftOption: (state, action) => {
      state.giftOption = action.payload;
    },
  },
});

export const {
  AddItemToCart,
  RemoveItemFromCart,
  DeleteParticularItemFromCart,
  UpdateGiftOption,
} = cartSlice.actions;
export default cartSlice.reducer;
