import React from "react";
import { LoginButton, LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
      <LoginButton href="#">Login with spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;
