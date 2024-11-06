import styled from "styled-components";
import Logo from "@assets/icon/icon-logo--img.svg?react";
import { EezyItem } from "@components/eezy/EezyItem";

export const EezingPage = () => {
    return (<Container>
        <Header>
            <ProfileCircle>
                <Logo width={20} height={20} />
            </ProfileCircle>
            <span>eezing...</span>
        </Header>
        <EezyItem />
    </Container>)
};

const Container = styled.div`
  padding: 9px 14px;
`;

const Header = styled.header`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;

  & > span {
    ${(props) => props.theme.typography.h1};
    font-weight: 500;
    color: #484848;
  }
`;

const ProfileCircle = styled.div`
  width: 31px;
  height: 31px;

  background-color: ${(props) => props.theme.color.white};
  border: 1px solid #d7d7d7;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`

`;