import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  margin-top: 7.38rem;
  padding: 0 1.25rem 3rem 1.25rem;
`;

export const Header = styled.div`
  position: fixed;
  top: 3rem;
  background-color: white;

  display: flex;
  width: 22.5rem;
  height: 6.9375rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.38rem;

  padding: 2rem 1.25rem 2rem 1.25rem;

  .bold {
    color: #494949;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .normal {
    color: #7c7c7c;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  .text {
    color: #494949;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.225rem */
  }
  .img {
    width: 100%;
  }
  .strong {
    color: #494949;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    padding-bottom: 0.5rem;
  }
`;
