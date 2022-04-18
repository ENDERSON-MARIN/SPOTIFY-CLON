import React from "react";
import { HeaderContainer, HeaderLeft, HeaderRight } from "../Body/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder="Artistas, canciones, podcasts" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar />
        <h4>Enderson Marin</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
