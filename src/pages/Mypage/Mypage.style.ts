import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  margin-top: 5.38rem;
  padding: 0 1.25rem 3rem 1.25rem;
`;

export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  .text-name {
    color: var(--Point-Color, #35b711);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.04rem;
  }
  .text-sir {
    color: var(--Text-Color, #0e1513);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.01rem;
  }
  .text-hello {
    color: var(--Text-Color, #0e1513);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.01rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  justify-content: flex-start;
  width: 100%;

  padding-bottom: 2rem;

  .main {
    padding: 0.625rem 1.25rem;
    color: var(--Point-Color, #35b711);

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .strong {
    color: var(--Point-Color, #35b711);

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub {
    color: var(--Text-Color, #0e1513);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
`;
