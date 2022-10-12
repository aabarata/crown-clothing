import { createAction } from "@reduxjs/toolkit";
import { CART_ACTIONS_TYPES } from "./cart.types";

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

export const addItemToCart = (cartItems, productToAdd) =>
  setCartItems(addCartItem(cartItems, productToAdd));

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  setCartItems(removeCartItem(cartItems, cartItemToRemove));

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  setCartItems(clearCartItem(cartItems, cartItemToClear));

export const toggleIsCartOpen = createAction(
  `cart/${CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN}`,
  () => {
    return {};
  }
);

export const setCartItems = createAction(
  `cart/${CART_ACTIONS_TYPES.SET_CART_ITEMS}`,
  (cartItems) => {
    return {
      payload: cartItems,
    };
  }
);
