import React, { useState, useEffect, useRef } from "react";

const AppDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  const [search, setSearch] = useState("");
  const timerRef = useRef(0);

  const getDrink = async (search) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await response.json();
    setDrinks(data.drinks);
  };

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => getDrink(search), 1000);
  }, [search]);

  const handleChange = (event) => setSearch(event.target.value);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>
        {drinks &&
          drinks.map((drink) => <li key={drink.idDrink}>{drink.strDrink}</li>)}
      </ul>
    </div>
  );
};

export default AppDrinks;
