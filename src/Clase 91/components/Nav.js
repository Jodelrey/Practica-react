import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/characters">Characters</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/episodes">Episodes</Link>
    </>
  );
};

export default Nav;
