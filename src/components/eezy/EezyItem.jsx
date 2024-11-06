import styled from "styled-components";
import Eezy from "@assets/icon/icon-eezy--small.svg?react";
import Edit from "@assets/icon/icon-edit.svg?react";
import { EezyButton } from "./EezyButton";
import Copy from "@assets/icon/icon-copy.svg?react";
import Regenerate from "@assets/icon/icon-refresh.svg?react";
import Share from "@assets/icon/icon-share.svg?react";

export const EezyItem = ({ data = { title: "Exporing UI Design" } }) => {
  return (
    <Container>
      <Header>
        <Title>
          <Eezy />
          <span>{data.title}</span>
        </Title>
        <div>
          <Edit width={13} height={13} />
        </div>
      </Header>
      <Contents>
        <Content>
          <span>SubTitle1</span>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Content>
        <Content>
          <span>SubTitle2</span>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Content>
      </Contents>
      <Buttons>
        <EezyButton text="Copy" Img={Copy} onclickFunc={() => {}} />
        <EezyButton text="Regenerate" Img={Regenerate} onclickFunc={() => {}} />
        <EezyButton text="Share" Img={Share} onclickFunc={() => {}} />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 18px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border: 1px solid #d7d7d7;
  border-radius: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const Contents = styled.div`
  height: 304px;

  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  & > span,
  div {
    ${(props) => props.theme.typography.h2};
    color: #484848;
    font-weight: 500;
  }
  & > div {
    padding: 0px 0px 0px 16px;
    border-left: 5px solid #fa99b3;
    ${(props) => props.theme.typography.h2};
    color: #000000;
    line-height: 150%;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 18px;
`;
