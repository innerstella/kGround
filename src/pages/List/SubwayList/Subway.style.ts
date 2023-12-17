import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin-top: 4rem;
  margin-bottom: 3rem;
  padding: 0 1.25rem 3rem 1.25rem;

  .title {
    padding-top: 2rem;
    color: var(--Text-Color, #0e1513);
    text-align: center;

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    .point {
      color: var(--Point-Color, #35b711);
    }
  }
`;

export const ListWrapper = styled.div`
  margin-top: -17rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
