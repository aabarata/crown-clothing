import { createAction } from "@reduxjs/toolkit";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

export const fetchCategoriesStart = createAction(
  `categories/${CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START}`,
  () => {
    return {};
  }
);

export const fetchCategoriesSuccess = createAction(
  `categories/${CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS}`,
  (categoriesArray) => {
    return {
      payload: categoriesArray,
    };
  }
);

export const fetchCategoriesFailed = createAction(
  `categories/${CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED}`,
  (error) => {
    return {
      payload: error,
    };
  }
);
