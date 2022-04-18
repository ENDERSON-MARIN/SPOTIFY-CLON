import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: null,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    SET_PLAYLIST: (state, action) => { 
      state.playlist = action.payload;
    },
  },
});

export const { SET_PLAYLIST } = playlistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlaylist = (state) => state.playlist.playlist;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default playlistSlice.reducer;
