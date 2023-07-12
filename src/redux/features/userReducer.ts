import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  currentUser: {};
};

const initialState = {
  currentUser: {},
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {currentUser} = userSlice.actions;
export default userSlice.reducer;