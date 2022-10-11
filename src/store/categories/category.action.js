import { createAction } from "@reduxjs/toolkit";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

export const setCategories = createAction(
  `categories/${CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES}`,
  (categoriesArray) => {
    return {
      payload: categoriesArray,
    };
  }
);
