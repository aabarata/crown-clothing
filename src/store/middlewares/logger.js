//Custom implementation of the logger middleware to show how is done
export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  //The next state (modified one) can only be displayed after the next is executed
  console.log("next state: ", store.getState());
};
