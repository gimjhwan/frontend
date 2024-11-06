import styled from "styled-components";
import Eezy from "@assets/icon/icon-eezy--small.svg?react";

export const EezyItem = ({ data = { title: "Exporing UI Design" } }) => {
  return (
    <Container>
      <Title>
        <Eezy />
        <span>{data.title}</span>
      </Title>
      <Content>
        <span>SubTitle</span>
        <span>content</span>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 18px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 14px;

  border: 1px solid #d7d7d7;
  border-radius: 16px;
`;

const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  & > span {
    ${(props) => props.theme.typography.title};
    color: #000000;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > span:first-child {
    ${(props) => props.theme.typography.h2};
    color: #484848;
    font-weight: 500;
  }
  & > span:last-child {
    padding: 0px 0px 0px 16px;
    border-left: 5px solid #fa99b3;
    ${(props) => props.theme.typography.h2};
    color: #000000;
  }
`;
