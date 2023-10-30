import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
