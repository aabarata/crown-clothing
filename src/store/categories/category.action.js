import { createAction } from "@reduxjs/toolkit";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

export const setCategoriesMap = createAction(
  `categories/${CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP}`,
  (categoriesMap) => {
    return {
      payload: categoriesMap,
    };
  }
);
