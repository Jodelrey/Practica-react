import React, { useState } from "react";
import firebase from "./configs/firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    firebase
      .auth()
      //metodo para loguear con email y password
      .signInWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(() => history.push("/"))
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
