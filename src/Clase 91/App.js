import React from "react";
import CharactersPage from "./CharactersPage";
import LocationsPage from "./LocationsPage";
import EpisodesPage from "./EpisodesPage";
import Nav from "./components/Nav";
import CharacterPage from "./CharacterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <CharactersPage />
        </Route>
        <Route exact path="/characters">
          <CharactersPage />
        </Route>
        <Route exact path="/locations">
          <LocationsPage />
        </Route>
        <Route exact path="/episodes">
          <EpisodesPage />
        </Route>
        <Route exact path="/character/:id">
          <CharacterPage />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
