import React from "react";
import { SpotifyBody } from "../Player/styles";
import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Player = () => {
  return (
    <>
      <SpotifyBody>
        <Sidebar />
        <Body />
      </SpotifyBody>
      <Footer />
    </>
  );
};

export default Player;
