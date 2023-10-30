import styled from "styled-components";

type Props = {
  text: string;
  color: "blue100" | "gray100";
  onClick?: () => void;
};

const RectangleButton = ({ text, color, onClick }: Props) => {
  return (
    <Button onClick={onClick} color={color}>
      <p className="text">{text}</p>
    </Button>
  );
};

export default RectangleButton;

const Button = styled.div`
  border-radius: 0.625rem;
  background: ${(props) => {
    if (props.color === "blue100") {
      return "var(--blue100)";
    } else if (props.color === "gray100") {
      return "var(--gray100)";
    }
  }};
  padding: 1rem 7rem;

  position: fixed;
  bottom: 10vh;
  width: 80vw;

  display: flex;
  justify-content: center;

  .text {
    color: ${(props) => {
      if (props.color === "blue100") {
        return "#fff";
      } else if (props.color === "gray100") {
        return "var(--blue100)";
      }
    }};
    font-family: SUIT Variable;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-align: center;
    margin: 0;
    white-space: nowrap;
  }
`;
