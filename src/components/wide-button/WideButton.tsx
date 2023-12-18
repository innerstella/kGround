import styled from "styled-components";

interface Props {
  text: string;
  onClick?: () => void;
}

const WideButton = ({ text, onClick }: Props) => {
  return (
    <MainWrapper onClick={onClick}>
      <p className="text">{text}</p>
    </MainWrapper>
  );
};

export default WideButton;

const MainWrapper = styled.div`
  display: inline-flex;
  padding: 0.875rem 6.3125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.375rem;
  background: var(--Point-Color, #35b711);

  width: 100%;

  .text {
    color: var(--white, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
  }
`;
