import React, { useState } from "react";
import firebase from "./configs/firebase";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    firebase
      //metodo para crear usuarios
      .auth()
      .createUserWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(() => history.push("/"))
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <h1>Sign Up</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
