import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

const INITIAL_STATE = {
  categories: [],
};

export const categoriesSlicer = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    [CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES]: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export default categoriesSlicer.reducer;
