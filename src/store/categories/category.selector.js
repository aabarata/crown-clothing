import { createSelector } from "@reduxjs/toolkit";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

//Use memoization to trigger only the select if the categories array changes
//Otherwise since reduce return always a new object the useSelector method thinks that is a new value and re-renders
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
