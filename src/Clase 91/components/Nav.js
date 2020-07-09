import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  height: 30px;
  border-radius: 10px;
  background-color: grey;
  color: white;
  font-size: 15px;
  text-decoration: none;
  width: 100px;
  text-align: center;
  font-family: "Helvetica";
  font-weight: bold;
  padding-top: 10px;
`;

const Nav = () => {
  return (
    <Container>
      <StyledLink to="/characters">Characters</StyledLink>
      <StyledLink to="/locations">Locations</StyledLink>
      <StyledLink to="/episodes">Episodes</StyledLink>
      <StyledLink to="/characters/?status=alive">Alive</StyledLink>
      <StyledLink to="/characters/?status=dead">Dead</StyledLink>
    </Container>
  );
};

export default Nav;
