import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

//Can be replaced by redux devTools
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

//Needed because of the way rootReducer is implemented
const combinedReducers = combineReducers({
  user: rootReducer.user,
  categories: rootReducer.categories,
  cart: rootReducer.cart,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

// The second param (undefined) is an optional aditional default state
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export const persistor = persistStore(store);
