import React from "react";
import { loginURL } from "../../SpotifyLogic";
import { LoginButton, LoginContainer } from "./styles";

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
