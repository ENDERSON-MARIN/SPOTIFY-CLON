import React, { useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromURL } from "./SpotifyLogic";
import Player from "./components/Player/Player";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = getTokenFromURL();
    // console.log("hash = ", hash);
    window.location.hash = "";
    const _token = hash.access_token;
    setToken(_token);
    console.log("token = ", token);
  }, []);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
