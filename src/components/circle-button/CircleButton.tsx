import styled from "styled-components";

interface Props {
  type: "main" | "point";
}

const CircleButton = ({ type }: Props) => {
  if (type === "main") {
    return (
      <MainWrapper>
        <img src="/assets/svg/ic-plus.svg" alt="more" />
      </MainWrapper>
    );
  }

  if (type === "point") {
    return (
      <PointWapper>
        <img src="/assets/svg/ic-plus.svg" alt="more" />
      </PointWapper>
    );
  }

  return null;
};

export default CircleButton;

const MainWrapper = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  width: 2.125rem;
  height: 2.125rem;

  border-radius: 6.25rem;
  background: var(--Main-Color, #043927);
`;

const PointWapper = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  width: 2.125rem;
  height: 2.125rem;

  border-radius: 6.25rem;
  background: var(--Point-Color, #35b711);
`;
