import styled from "styled-components";
import Logo from "@assets/icon/icon-logo--img.svg?react";
import Folder from "@assets/icon/icon-folder.svg?react";
import { EezyItem } from "@components/eezy/EezyItem";

export const EezingPage = () => {
  return (
    <Container>
      <Header>
        <ProfileCircle>
          <Logo width={20} height={20} />
        </ProfileCircle>
        <span>eezing...</span>
      </Header>
      <EezyItem />
      <MemoBox>
        <MemoInput type="text" placeholder="Add memo..." />
        <MemoNum>
          <span>0/500</span>
        </MemoNum>
      </MemoBox>
      <AddBox>
        <AddButton>Add your History</AddButton>
      </AddBox>
      <ChooseBox>
        <ChooseText>
          <span>Related Category</span>
          <span>or create new category</span>
        </ChooseText>
        <ChooseIcon>
          <span>+1</span>
          <Folder width={15} height={11} />
        </ChooseIcon>
      </ChooseBox>
    </Container>
  );
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

const MemoBox = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 14px;
  background-color: #ffffff;
  padding: 12px 18px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  margin-top: 9px;
`;

const MemoInput = styled.textarea`
  height: 48px;
  border: none;
  background-color: transparent;
  ${(props) => props.theme.typography.h2};
  color: #000000;
  &::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }
  &:active, &:focus {
    outline: none;
  }
`;

const MemoNum = styled.div`
  display: flex;
  justify-content: flex-end;
  & > span {
    ${(props) => props.theme.typography.h2};
    color: rgba(0, 0, 0, 0.45);
  }
`;

const AddBox = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 9px;
`;

const AddButton = styled.button`
  border: 0.5px solid #fa99b3;
  border-radius: 20px;
  background-color: #fa99b3;
  padding: 5px 14px;

  ${(props) => props.theme.typography.h3};
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChooseBox = styled.div`
  background-color: #ffffff;

  border: 1px solid #d7d7d7;
  border-radius: 60px;
  padding: 21px 18px;

  display: flex;
  justify-content: space-between;

  margin-top: 18px;
`;

const ChooseText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > span:first-child {
    ${(props) => props.theme.typography.h2};
    color: #000000;
  }
  & > span:last-child {
    ${(props) => props.theme.typography.h3};
    color: #919191;
  }
`;

const ChooseIcon = styled.div`
  display: flex;
  gap: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    ${(props) => props.theme.typography.h2};
    color: #000000;
  }
`;
