import { createSlice } from "@reduxjs/toolkit";
import { USER_ACTIONS_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: "",
};

export const userSlicer = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    [USER_ACTIONS_TYPES.SET_CURRENT_USER]: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export default userSlicer.reducer;
