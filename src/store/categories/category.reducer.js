import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlicer = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    [CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START]: (state) => {
      state.isLoading = true;
    },
    [CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS]: (
      state,
      { payload }
    ) => {
      state.categories = payload;
      state.isLoading = false;
    },
    [CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED]: (
      state,
      { payload }
    ) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default categoriesSlicer.reducer;
