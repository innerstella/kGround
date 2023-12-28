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

export const CardWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 1.25rem 1rem 1.25rem 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.375rem;
  background: #f0f0f0;
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 0.44rem;
    flex-wrap: wrap;
  }
  .scroll {
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
  .flex-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .flex-start {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .mountainName {
    color: var(--Main-Color, #043927);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .mountainImg {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.625rem;
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
