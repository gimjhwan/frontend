import { useState } from "react";
import { useNavigate } from "react-router-dom";
// style
import styled from "styled-components";
import Logo from "@assets/icon/icon-logo--img.svg?react";
import Account from "@assets/icon/icon-account--small.svg?react";
import Eezy from "@assets/icon/icon-eezy--small.svg?react";
import Search from "@assets/icon/icon-search--small.svg?react";
import Squeeze from "@assets/icon/icon-squeeze--small.svg?react";
import Titmetable from "@assets/icon/icon-timetable--small.svg?react";

export const Nav = ({setNavOpen}) => {
  const [userName, setUserName] = useState("UserName");
  const [enterIndex, setEnterIndex] = useState(0);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setEnterIndex(index);
  };
  const handleMouseLeave = () => {
    setEnterIndex(0);
  };

  const handleOnClick = (path) => {
    navigate(path);
    setNavOpen(false);
  };
  
  return (
    <Container onMouseLeave={() => handleMouseLeave()}>
      <NavCell>
        <LogoCircle>
          <Logo width={20} height={20} />
        </LogoCircle>
        <UserSpan>{`Hello, ${userName}!`}</UserSpan>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/user")}
        style={{ backgroundColor: enterIndex === 1 ? "#F0F0F0" : "" }}
      >
        <Titmetable
          width={16}
          height={16}
          fill={enterIndex === 1 ? "#1C1B1F" : "#808080"}
        />
        <div>
          <span style={{ color: enterIndex === 1 ? "#000000" : "" }}>
            Your Squeezy
          </span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/squeeze")}
        style={{ backgroundColor: enterIndex === 2 ? "#F0F0F0" : "" }}
      >
        <Squeeze
          width={16}
          height={16}
          fill={enterIndex === 2 ? "#1C1B1F" : "#808080"}
        />
        <div>
          <span style={{ color: enterIndex === 2 ? "#000000" : "" }}>
            squeeze
          </span>
          <span>categorize current tabs</span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/eezy")}
        style={{ backgroundColor: enterIndex === 3 ? "#F0F0F0" : "" }}
      >
        <Eezy
          width={16}
          height={16}
          fill={enterIndex === 3 ? "#1C1B1F" : "#808080"}
        />
        <div>
          <span style={{ color: enterIndex === 3 ? "#000000" : "" }}>eezy</span>
          <span>summarize this page</span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/search")}
        style={{ backgroundColor: enterIndex === 4 ? "#F0F0F0" : "" }}
      >
        <Search
          width={16}
          height={16}
          fill={enterIndex === 4 ? "#1C1B1F" : "#808080"}
        />
        <div>
          <span style={{ color: enterIndex === 4 ? "#000000" : "" }}>
            Search
          </span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/account")}
        style={{ backgroundColor: enterIndex === 5 ? "#F0F0F0" : "" }}
      >
        <Account
          width={16}
          height={16}
          fill={enterIndex === 5 ? "#1C1B1F" : "#808080"}
        />
        <div>
          <span style={{ color: enterIndex === 5 ? "#000000" : "" }}>
            account
          </span>
        </div>
      </NavCell>
    </Container>
  );
};

const Container = styled.nav`
  position: absolute;

  background-color: ${(props) => props.theme.color.white};
  border-radius: 12px;
  border: none;
  box-shadow: 0px 4px 14.8px rgba(0, 0, 0, 0.15);

  width: 190px;
  top: 30px;
  left: calc(100% - 200px);
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

const NavCell = styled.div`
  height: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  padding: 6px;
  gap: 10px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    & > span:last-child {
      ${(props) => props.theme.typography.subDescription};
      color: rgba(128, 128, 128, 0.6);
    }
    & > span:first-child {
      ${(props) => props.theme.typography.h3};
      font-weight: bold;
      color: #808080;
    }
  }
`;

const LogoCircle = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 1px solid #d7d7d7d7;

  margin-left: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserSpan = styled.span`
  ${(props) => props.theme.typography.description};
  color: #626262;
`;
