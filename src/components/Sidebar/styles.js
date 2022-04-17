import styled from "styled-components";

const SidebarComponent = styled.div`
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
`;

export { SidebarComponent };
