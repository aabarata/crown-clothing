import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";

// Helper library to monitorize store (not needed)
import logger from "redux-logger";

// Methods that runs before the reducer be triggered
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// The second param (undefined) is an optional aditional default state
export const store = createStore(rootReducer, undefined, composedEnhancers);
