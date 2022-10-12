import { createSlice } from "@reduxjs/toolkit";
import { CART_ACTIONS_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlicer = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    [CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN]: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    [CART_ACTIONS_TYPES.SET_CART_ITEMS]: (state, { payload }) => {
      state.cartItems = payload;
    },
  },
});

export default cartSlicer.reducer;
