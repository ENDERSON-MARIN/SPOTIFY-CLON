import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { SET_TOKEN } = tokenSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToken = (state) => state.user.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default tokenSlice.reducer;
