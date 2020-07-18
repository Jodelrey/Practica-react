import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Categories from "./components/Categories";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Navigation />
      <button onClick={() => setLoggedIn(!loggedIn)}>Loguear</button>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/products" component={Products} />

        <Route exact path="/login">
          <h1>Login</h1>
        </Route>
        <Route exact path="/account">
          <h1>My Account</h1>
          {!loggedIn && <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
