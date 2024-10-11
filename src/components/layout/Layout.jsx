import styled from "styled-components";
// img
import Logo from "../../assets/icon/icon-logo--text.svg?react";
import Menu from "../../assets/icon/icon-menu.svg?react";
// components
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Logo />
        <Menu />
        <Nav />
      </Header>
      <main>{children}</main>
    </Container>
  );
};

const Container = styled.div`
  min-width: 360px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
