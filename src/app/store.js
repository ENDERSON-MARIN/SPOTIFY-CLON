import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import tokenReducer from '../features/user/tokenSlice';
import playlistReducer from '../features/user/PlaylistSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    playlist: playlistReducer,
  },
});
