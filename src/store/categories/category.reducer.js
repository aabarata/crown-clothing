import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesSlicer = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    [CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP]: (state, { payload }) => {
      state.categoriesMap = payload;
    },
  },
});

export default categoriesSlicer.reducer;
