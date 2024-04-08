import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Login = styled.div`
  cursor: pointer;

  display: inline-flex;
  padding: 1rem 3.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Line, #cecece);

  .svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  .text {
    color: var(--Default, #969696);
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0;

    padding-top: 0.1rem;
  }
`;

export const NonLogin = styled.div`
  cursor: pointer;

  padding: 1.25rem 0.62rem 0.38rem 0.62rem;

  border-bottom: 1px solid var(--Line, #cecece);
  .text {
    color: var(--Default, #969696);
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
