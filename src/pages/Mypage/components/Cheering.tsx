import styled from "styled-components";

const Cheering = ({ text }: { text: string }) => {
  return (
    <Container>
      <MainWrapper>
        <p className="text">{text}</p>
      </MainWrapper>
    </Container>
  );
};

export default Cheering;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 6.25rem;
  border: 1px solid var(--Main-Color, #043927);
  background: rgba(4, 57, 39, 0.1);

  width: 12rem;

  margin-bottom: 1rem;

  .text {
    color: var(--Main-Color, #043927);

    /* Sub2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
