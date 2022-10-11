import userReducer from "./user/user.reducer";
import categoryReducer from "./categories/category.reducer";

export const rootReducer = {
  user: userReducer,
  categories: categoryReducer,
};
