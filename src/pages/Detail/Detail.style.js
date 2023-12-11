import styled from "styled-components";

export const MainWrapper = styled.div`
  .img {
    width: 100vw;
    height: 16.8125rem;
  }
  margin-top: 4rem;
  padding-bottom: 3rem;
`;

export const Wrapper = styled.div`
  padding: 0rem 1.25rem;

  .focus {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    color: var(--Text-Color, #0e1513);

    /* Focus */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub2 {
    color: var(--Text-Color, #0e1513);

    /* Sub2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
  }
  .sub3 {
    color: var(--Text-Sub, #545454);

    /* Sub3 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .box1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    padding: 0 0 1rem 0;

    .text {
      color: var(--Text-Color, #0e1513);
      text-align: center;

      font-family: Pretendard;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 133.333% */
    }
  }
  .box2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.25rem;
  }
  .box2-1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
  .box3 {
    display: flex;
    flex-direction: row;
    gap: 0.87rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }
  .box4 {
    display: flex;
    gap: 0.625rem;
    flex-direction: column;
  }
`;

export const Chip = styled.div`
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 6.25rem;
  border: 1px solid rgba(53, 183, 17, 0.2);
  background: rgba(53, 183, 17, 0.2);
`;
