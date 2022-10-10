import { createAction } from "@reduxjs/toolkit";
import { USER_ACTIONS_TYPES } from "./user.types";

export const setCurrentUser = createAction(
  `user/${USER_ACTIONS_TYPES.SET_CURRENT_USER}`,
  (user) => {
    return {
      payload: JSON.parse(JSON.stringify(user)),
    };
  }
);
