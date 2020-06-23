import React, { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");
  const switchTheme = () => {
    const theme = currentTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      <StyledThemeProvider
        theme={currentTheme === "lightTheme" ? darkTheme : lightTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
