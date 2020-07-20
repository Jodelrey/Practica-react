import React, { useState, useEffect, useRef } from "react";

//debounce -> ejecutar un efecto cuando se termina de realizar una accion
//throttle -> permite controlar cuando se va a realizar un efecto

const Ejemplo = () => {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const timerRef = useRef(null);
  const llamadaEnCursoRef = useRef(false);

  const handleChange = (event) => setSearch(event.target.value);

  const llamarApi = () =>
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        llamadaEnCursoRef.current = false;
      });

  //DEBOUNCE
  useEffect(() => {
    clearTimeout(timeRef.current);
    timerRef.current = setTimeout(() => llamarApi, 1000);
  }, [search]);

  //THROTTLE
  useEffect(() => {
    if (llamadaEnCursoRef.current) {
      return;
    }
    llamadaEnCursoRef.current = true;
    clearTimeout(timeRef.current);
    timerRef.current = setTimeout(() => llamarApi, 1000);
  }, [search]);

  return (
    <div>
      <input value={search} onChange={handleChange} />
      <ul>
        {characters &&
          characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Ejemplo;
