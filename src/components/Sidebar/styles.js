import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 0.2;
  height: 100vh;
  background-color: #000000;
  min-width: 240px;
  color: #fff;
  /* border: 1px solid red; */
  & img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
  }
  & hr {
    border: 1px solid gray;
    width: 90%;
    margin: 10px auto;
  }
`;

const Playlists = styled.div`
  margin: 5px 10px;
`;

const Choices = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
  &:hover {
    color: #fff;
  }
`;

export { SidebarContainer, Playlists, Choices };
