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
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .sub1 {
    color: var(--Text-Color, #0e1513);

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
  }
  .sub2 {
    color: var(--Point-Color, #35b711);

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
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
  .sub4 {
    color: var(--Black30);

    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    white-space: pre-wrap;
    padding-top: 0.1rem;
  }
  .button {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .gap {
    display: flex;
    gap: 0.75rem;
  }
`;
