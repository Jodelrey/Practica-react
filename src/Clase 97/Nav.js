import React from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "./configs/firebase";

const Nav = ({ user }) => {
  const history = useHistory();

  const handleClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.push("/login"));
  };

  return user ? (
    <>
      <Link to="/">Home</Link>
      <button onClick={handleClick}>Log Out</button>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

export default Nav;
