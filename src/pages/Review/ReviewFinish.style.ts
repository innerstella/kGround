import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  margin-top: 5.38rem;
  margin-bottom: 10vh;
  padding: 0 1.25rem 2rem 1.25rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  .main {
    padding: 0.625rem 1.25rem;
    color: var(--Point-Color, #35b711);
    text-align: center;

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
    text-align: center;

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 1.25rem 2.5rem 1.25rem 0.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.375rem;
  background: #f0f0f0;
  margin-top: 2.25rem;
  .mountainName {
    color: var(--Main-Color, #043927);

    /* Focus */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .mountainAddress {
    color: var(--Text-Sub, #545454);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
  .reviewComment {
    color: var(--Text-Sub, #545454);

    /* Body1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 125% */
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const LoadingBox = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
