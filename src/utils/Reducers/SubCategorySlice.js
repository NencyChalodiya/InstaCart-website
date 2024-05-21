import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subCategoryItems: [],
};

const SubCategorySlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    AddSubCategoryItem(state, action) {
      //console.log(action.payload);
      // const subCategoryIndex = state.subCategoryItems.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      //console.log("CatgeoryIndex", CatgeoryIndex);
      // const subCategoryIndex = state.categoryItems[
      //   CatgeoryIndex
      // ].subcategories.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      //console.log("subCategoryIndex", subCategoryIndex);

      const itemIndex = state.subCategoryItems.products.findIndex(
        (item) => item.id === action?.payload?.id
      );

      if (itemIndex !== -1) {
        if (state?.subCategoryItems?.products[itemIndex]?.qty) {
          state.subCategoryItems.products[itemIndex].qty += 1;
        } else {
          state.subCategoryItems.products[itemIndex].qty = 1;
        }
      }
    },

    RemoveSubCategoryItem(state, action) {
      // const subCategoryIndex = state.subCategoryItems.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      // const subCategoryIndex = state.categoryItems[
      //   CatgeoryIndex
      // ].subcategories.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      const itemIndex = state.subCategoryItems.products.findIndex(
        (item) => item.id === action?.payload?.id
      );
      if (itemIndex !== -1) {
        if (state?.subCategoryItems?.products[itemIndex]?.qty > 1) {
          state.subCategoryItems.products[itemIndex].qty -= 1;
        } else {
          delete state.subCategoryItems.products[itemIndex].qty;
        }
      }
    },

    DeleteTotalSubCategoryItems(state, action) {
      // const subCategoryIndex = state.subCategoryItems.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );

      // const subCategoryIndex = state.categoryItems[
      //   CatgeoryIndex
      // ].subcategories.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      // console.log("subCategoryIndex", subCategoryIndex);

      const itemIndex = state.subCategoryItems.products.findIndex(
        (item) => item.id === action?.payload?.id
      );

      if (itemIndex !== -1) {
        delete state.subCategoryItems.products[itemIndex].qty;
      }
    },

    SetSubCategoryItemsProducts(state, action) {
      // console.log("action", action.payload);
      state.subCategoryItems = action.payload || [];
    },
  },
});

export const {
  AddSubCategoryItem,
  RemoveSubCategoryItem,
  DeleteTotalSubCategoryItems,
  SetSubCategoryItemsProducts,
} = SubCategorySlice.actions;
export default SubCategorySlice.reducer;
