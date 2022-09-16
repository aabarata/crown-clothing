import { useState, createContext } from "react";

import PRODUCTS from "../shop-data.json";

//Actual value we want to access
export const ProductsContext = createContext({
  products: [],
});

//Provider that will wrap the component that needs access to the data
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
