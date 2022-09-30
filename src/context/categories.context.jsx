import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

//Actual value we want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
});

//Provider that will wrap the component that needs access to the data
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
