import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin-top: 4rem;
  margin-bottom: 10rem;
  padding: 0 1.25rem 3rem 1.25rem;
  .gap3 {
    padding-top: 1.3rem;
  }
  .title {
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
  .img {
    width: 9.125rem;
    height: 9.125rem;
    border-radius: 50%;
  }
  .desc {
    color: var(--Text-Sub, #545454);
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
  }
  .fixed-bottom {
    position: fixed;
    bottom: 20vh;

    width: 90%;
  }
`;

export const KeywordWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  /* width: 90vw; */
`;
