import React, { useState, useEffect } from "react";
import firebase from "./configs/firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Account from "./views/Account";
import Nav from "./components/Nav";

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsuscribe = firebase
      .auth()
      //listener que se ejecuta cuando hay el usuario se loguea/desloguea
      //cuando el usuario esta deslogueado es null
      .onAuthStateChanged((user) => {
        setUser(user);
      });
    //cortamos la conexion cuando el componente se desmonta
    return () => unsuscribe();
  }, []);

  return (
    <div>
      <Router>
        <Nav user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup" component={SignUp} />
          <Route exact path="/account">
            <Account user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
