import styled from "styled-components";
import Logo from "../../assets/icon/icon-logo--text.svg";
import Menu from "../../assets/icon/icon-menu.svg";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="squeezy text logo" />
        <img src={Menu} alt="menu interaction icon" />
        <Nav />
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
  justify-content: space-between;
`;
