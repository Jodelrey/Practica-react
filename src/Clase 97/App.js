import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Nav from "./Nav";

import firebase from "./configs/firebase";

const App = () => {
  const [user, setUser] = useState();
  const [isLoading, setisLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
      setisLoading(false);
      if (!user) {
        history.push("/login");
      }
    });

    return () => unsuscribe();
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Nav user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login user={user} />
        </Route>
        <Route path="/signup">
          <Signup user={user} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
