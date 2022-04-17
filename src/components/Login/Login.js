import React from "react";
import { LoginButton, LoginContainer } from "./styles";

const endpoint = "https://accounts.spotify.com/authorize";
const clientID = "0567aa6bf5794a14a0e55d2e48bdddb1";
const redirectURI = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scopes=${scopes.join(
  "%20"
)}`;

const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="logo"
      />
      <LoginButton href={loginURL}>Login with spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;
