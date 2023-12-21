import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  margin-top: 5.38rem;
  padding: 0 1.25rem 2rem 1.25rem;
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

export const Divider = styled.div`
  background: #d9d9d9;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13) inset;
  height: 0.625rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  margin-top: 1.5rem;
  padding: 0 1.25rem 10rem 1.25rem;

  .box-num {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;

    .text {
      color: var(--Text-Color, #0e1513);

      /* Body2 */
      font-family: Pretendard;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.125rem; /* 128.571% */
      text-align: left;
    }
  }
`;
