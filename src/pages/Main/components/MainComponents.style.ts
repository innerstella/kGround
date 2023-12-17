import styled from "styled-components";

export const MainWrapper = styled.div`
  display: inline-flex;
  padding: 1.5rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .sub1 {
    color: var(--Text-Color, #0e1513);

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub2 {
    color: var(--Point-Color, #35b711);

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub3 {
    color: #000;

    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    padding-left: 0.87rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow-x: scroll;

  .gap {
    display: flex;
    gap: 0.75rem;
  }
`;
