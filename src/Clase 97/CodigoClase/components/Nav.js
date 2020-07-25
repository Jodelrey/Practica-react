import React, { useEffecet } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "./configs/firebase";

const Nav = ({ user }) => {
  const history = useHistory();
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.push("/"));
  };

  return (
    <nav>
      {user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
