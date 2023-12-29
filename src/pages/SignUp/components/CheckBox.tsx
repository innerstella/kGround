import styled from "styled-components";

interface CheckBoxProps {
  onClick: () => void;
  isClicked: boolean;
}

const CheckBox = ({ onClick, isClicked }: CheckBoxProps) => {
  return (
    <MainWrapper onClick={onClick}>
      {isClicked && <img src="/assets/icon/ic-check-green.svg" alt="check" />}
    </MainWrapper>
  );
};

export default CheckBox;

const MainWrapper = styled.div`
  border-radius: 0.625rem;
  border: 1px solid var(--Black30, #969696);
  background: #fff;

  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
