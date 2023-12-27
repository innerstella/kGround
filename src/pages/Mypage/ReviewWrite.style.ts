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

  margin-bottom: 10vh;
`;

export const MountainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;

  .text {
    color: var(--Main-Color, #043927);
    text-align: center;

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 0.62rem 1.25rem;
  }
  .img {
    border-radius: 0.625rem;
    width: 20rem;
    height: 10rem;
    object-fit: cover;
  }
`;
