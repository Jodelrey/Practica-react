import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Products = () => {
  const { pathname, search } = useLocation();
  const history = useHistory();

  const handleClick = () => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("discount", true);
    const newURL = `${pathname}?${searchParams.toString()}`;
    history.push(newURL);
  };

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={handleClick}>Buscar con descuento</button>
    </div>
  );
};

export default Products;
