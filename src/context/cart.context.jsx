import { useState, createContext } from "react";

//Actual value we want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

//Provider that will wrap the component that needs access to the data
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
