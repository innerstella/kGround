import styled from "styled-components";

type Props = {
  text: string;
};

const TagButton = ({ text }: Props) => {
  return (
    <Button>
      <p className="text">{text}</p>
    </Button>
  );
};

export default TagButton;

const Button = styled.div`
  border-radius: 10px;
  border: 2px solid var(--Secondary);
  background: var(--Clicked);
  .text {
    color: #000;
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    padding: 0.5rem 0.7rem;
  }
`;
