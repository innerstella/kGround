import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <MobileContainer>
        <ChakraProvider>
          <RecoilRoot>
            <AppRouter />
          </RecoilRoot>
        </ChakraProvider>
      </MobileContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: white;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`;
