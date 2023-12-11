import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  input {
    border: 1px solid #cecece;
  }
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 2rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const Button = styled.div`
  width: 30vw;
  height: 5vh;
  background-color: gray;
  text-align: center;
  color: white;
  font-weight: 800;
  font-size: 2rem;
`;
