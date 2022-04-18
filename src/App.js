import React, { useEffect } from "react";

import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromURL } from "./SpotifyLogic";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, SET_USER } from "./features/user/userSlice";
import SpotifyWebApi from "spotify-web-api-js";
import { selectToken, SET_TOKEN } from "./features/user/tokenSlice";
import { SET_PLAYLIST } from "./features/user/PlaylistSlice";

function App() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;

    if (_token) {
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => dispatch(SET_USER(user)));
      console.log("token = ", token);
      spotify
        .getPlaylist("5XXvmcfW3novbjQQpZCZ1q")
        .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
    }
  }, [dispatch]);
  return <div className="App">{user ? <Player /> : <Login />}</div>;
}

export default App;
