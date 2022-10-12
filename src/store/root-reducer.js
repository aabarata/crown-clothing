import userReducer from "./user/user.reducer";
import categoryReducer from "./categories/category.reducer";
import cartReducer from "./cart/cart.reducer";

export const rootReducer = {
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
};
