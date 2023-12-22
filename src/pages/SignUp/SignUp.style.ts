import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 6rem 1.25rem 3rem 1.25rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  width: 100%;

  margin-top: 4rem;
  margin-bottom: 1rem;
  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
