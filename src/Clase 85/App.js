import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ToggleTheme from "./ToggleTheme";
import { ThemeProvider } from "./contexts/ThemeContext";

const GlobalStyle = createGlobalStyle`
body{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colorBackground};
  font-family: "Helvetica";
}
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 10px;
  color: ${(props) => props.theme.colorFont};
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colorFont};
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ToggleTheme />
      <Title>Prueba THEME</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum. In culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </ThemeProvider>
  );
};

export default App;
