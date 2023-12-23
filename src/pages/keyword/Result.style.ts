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

  .fixed-bottom {
    position: fixed;
    bottom: 20vh;

    width: 90%;
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25vh;
`;
