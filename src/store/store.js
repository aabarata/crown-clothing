import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// Redux-saga is another async sideEffect library and replace Thunk (don't use both)
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

//Can be replaced by redux devTools
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

//Needed because of the way rootReducer is implemented
const combinedReducers = combineReducers({
  user: rootReducer.user,
  categories: rootReducer.categories,
  cart: rootReducer.cart,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

// When using configureStore react thunk is automaticly included
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

//Initialize redux-saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
