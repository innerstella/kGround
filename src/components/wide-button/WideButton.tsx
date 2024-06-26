import styled from "styled-components";

interface Props {
  text: string;
  onClick?: () => void;
  type: "fill" | "outline";
}

const WideButton = ({ text, onClick, type }: Props) => {
  return (
    <MainWrapper onClick={onClick} type={type}>
      <p className="text">{text}</p>
    </MainWrapper>
  );
};

export default WideButton;

const MainWrapper = styled.div<{ type: string }>`
  cursor: pointer;

  display: inline-flex;
  padding: 0.875rem 6.3125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.375rem;
  background: ${(props) =>
    props.type === "fill"
      ? "var(--Point-Color, #35b711)"
      : "var(--white, #fff)"};

  width: 100%;

  border: ${(props) =>
    props.type === "outline" && "2px solid var(--Point-Color, #35B711);"};
  .text {
    color: ${(props) =>
      props.type === "fill"
        ? "var(--white, #fff) "
        : " var(--Point-Color, #35b711)"};
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
  }
`;
