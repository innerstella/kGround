import styled from "styled-components";

export const StartContainer = styled.div`
  /* width: 100vw; */
  height: 100dvh;
  background-color: white;
  font-family: "SUIT", sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 13rem 2.5rem 0rem 2.5rem;
`;

export const Subtitle = styled.p`
  color: #0e1513;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding-bottom: 1.06rem;
`;

export const Title = styled.p`
  color: var(--Point-Color);
  text-align: center;
  font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  padding-bottom: 3.88rem;

  .green {
    color: var(--Main-Color);
    font-family: Pretendard;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const Image = styled.img`
  width: 7.3125rem;
  height: 6.375rem;
  flex-shrink: 0;

  padding-bottom: 1rem;
`;

export const Text = styled.p`
  color: var(--Text-Color, #0e1513);
  text-align: center;

  /* Sub1 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-bottom: 3.88rem;
`;
