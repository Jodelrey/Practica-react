import React, { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";
import { Lightbulb } from "@styled-icons/fa-regular/Lightbulb";
import { Lightbulb as LightOn } from "@styled-icons/fa-solid/Lightbulb";
import styled from "styled-components";

const Off = styled(Lightbulb)`
  width: 40px;
  margin: 5px;
`;

const On = styled(LightOn)`
  width: 40px;
  margin: 5px;
`;

const ToggleTheme = () => {
  const { currentTheme, switchTheme } = useContext(ThemeContext);
  return (
    <>
      {currentTheme === "lightTheme" ? (
        <On onClick={switchTheme} />
      ) : (
        <Off onClick={switchTheme} />
      )}
    </>
  );
};

export default ToggleTheme;
