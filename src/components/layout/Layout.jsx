import { useState } from "react";
import styled from "styled-components";
// img
import Logo from "../../assets/icon/icon-logo--text.svg?react";
import Menu from "../../assets/icon/icon-menu.svg?react";
// components
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <Container>
      <Header>
        <div style={{ marginTop: "9px" }}>
          <Logo />
        </div>
        <div onClick={() => setIsNavOpen((prev) => !prev)}>
          <Menu />
        </div>
        {
          isNavOpen && <Nav setNavOpen={setIsNavOpen}/>
        }
      </Header>
      <main>{children}</main>
    </Container>
  );
};

const Container = styled.div`
  min-width: 360px;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  padding: 9px 12px;
  position: relative;
  justify-content: space-between;
`;
