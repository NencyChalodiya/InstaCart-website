import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryItems: [],
};

const CategorySlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    AddCategoryItem(state, action) {
      //console.log(action.payload);
      const subCategoryIndex = state.categoryItems.findIndex(
        (item) => item.subcategory_id === action?.payload?.subcategory_id
      );
      //console.log("CatgeoryIndex", CatgeoryIndex);
      // const subCategoryIndex = state.categoryItems[
      //   CatgeoryIndex
      // ].subcategories.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      //console.log("subCategoryIndex", subCategoryIndex);

      const itemIndex = state.categoryItems[
        subCategoryIndex
      ].products.findIndex((item) => item.id === action?.payload?.id);

      if (itemIndex !== -1 && subCategoryIndex !== -1) {
        if (state?.categoryItems[subCategoryIndex]?.products[itemIndex]?.qty) {
          state.categoryItems[subCategoryIndex].products[itemIndex].qty += 1;
        } else {
          state.categoryItems[subCategoryIndex].products[itemIndex].qty = 1;
        }
      }
    },

    RemoveCategoryItem(state, action) {
      const subCategoryIndex = state.categoryItems.findIndex(
        (item) => item.subcategory_id === action?.payload?.subcategory_id
      );
      // const subCategoryIndex = state.categoryItems[
      //   CatgeoryIndex
      // ].subcategories.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      const itemIndex = state.categoryItems[
        subCategoryIndex
      ].products.findIndex((item) => item.id === action?.payload?.id);
      if (itemIndex !== -1 && subCategoryIndex !== -1) {
        if (
          state?.categoryItems[subCategoryIndex]?.products[itemIndex]?.qty > 1
        ) {
          state.categoryItems[subCategoryIndex].products[itemIndex].qty -= 1;
        } else {
          delete state.categoryItems[subCategoryIndex].products[itemIndex].qty;
        }
      }
    },

    DeleteTotalCategoryItems(state, action) {
      const subCategoryIndex = state.categoryItems.findIndex(
        (item) => item.subcategory_id === action?.payload?.subcategory_id
      );

      // const subCategoryIndex = state.categoryItems[
      //   CatgeoryIndex
      // ].subcategories.findIndex(
      //   (item) => item.subcategory_id === action?.payload?.subcategory_id
      // );
      // console.log("subCategoryIndex", subCategoryIndex);

      const itemIndex = state.categoryItems[
        subCategoryIndex
      ].products.findIndex((item) => item.id === action?.payload?.id);

      if (itemIndex !== -1 && subCategoryIndex !== -1) {
        delete state.categoryItems[subCategoryIndex].products[itemIndex].qty;
      }
    },

    SetCategoryItemsProducts(state, action) {
      // console.log("action", action.payload);
      state.categoryItems = action.payload || [];
    },
  },
});

export const {
  AddCategoryItem,
  RemoveCategoryItem,
  DeleteTotalCategoryItems,
  SetCategoryItemsProducts,
} = CategorySlice.actions;
export default CategorySlice.reducer;
