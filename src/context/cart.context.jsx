import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

//Important to return a new array so react can detect the changes
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//Important to return a new array so react can detect the changes
const removeCartItem = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

//Actual value we want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTIONS_TYPES = {
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
  SET_CART_ITEM: "SET_CART_ITEM",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTIONS_TYPES.SET_CART_ITEM:
      return {
        ...state,
        cartItems: payload.cartItems,
        cartCount: payload.cartCount,
        cartTotal: payload.cartTotal,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

//Provider that will wrap the component that needs access to the data
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (count, cartItem) => (count += cartItem.quantity),
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => (total += cartItem.price * cartItem.quantity),
      0
    );
    dispatch(
      createAction(CART_ACTIONS_TYPES.SET_CART_ITEM, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const toggleIsCartOpen = () => {
    dispatch(
      createAction(CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN, !state.isCartOpen)
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    toggleIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
