import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import firebase from "./configs/firebase";

const Login = ({ user }) => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(() => history.push("/"))
      .catch((error) => setError(error.message));
  };

  return !user ? (
    <>
      {error && <h1>{error}</h1>}
      <h1>Sign In</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Login;
