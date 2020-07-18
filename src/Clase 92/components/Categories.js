import React from "react";
import SubCategory from "./components/SubCategory";
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

const Categories = () => {
  //nos permite manejar el historial de rutas

  const history = useHistory();

  const { path, url } = useRouteMatch();

  const handleClick = () => {
    history.push("/");
  };

  const handleGoBack = () => {
    //history.go(-2)
    history.goBack();
  };

  return (
    <div>
      <h1>Categories</h1>
      <Link to={`${url}/celulares`}>Celulares</Link>
      <Link to={`${url}/computadoras`}>Computadoras</Link>
      <Link to={`${url}/muebles`}>Muebles</Link>
      <Switch>
        <Route path={`${path}/subcategoryId`} component={SubCategory} />
      </Switch>
      <button onClick={handleClick}>Ir a Home</button>
      <button onClick={handleGoBack}>Ir atras</button>
    </div>
  );
};

export default Categories;
