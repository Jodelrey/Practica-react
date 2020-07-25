import React, { useState, useEffect } from "react";
import db from "./firebase";
import data from "./data";
import "./styles.css";

// ordenar
// filtrar

// limitar
// paginar

const EjercicioApp = () => {
  const [characters, setCharacters] = useState([]);

  // const loadCharacters = () => {
  //   data.forEach((c) => {
  //     db.collection("characters")
  //       .add(c)
  //       .then((doc) => console.log(`Cargado ${doc.id}`));
  //   });
  // };

  // useEffect(() => {
  //   db.collection("characters")
  //     .get()
  //     .then((snapshot) =>
  //       setCharacters(
  //         snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
  //       )
  //     );
  // }, []);

  const handleFilter = (value) => {
    let queryRef = db.collection("characters");
    if (value) {
      queryRef = queryRef.where("status", "==", value);
    }

    queryRef.get().then((snapshot) => {
      setCharacters(
        snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
      );
    });
  };

  return (
    <>
      <select onChange={(event) => handleFilter(event.target.value)}>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
        <option value="">All</option>
      </select>
      <div className="characters">
        {characters.map((character) => (
          <article key={character.firebaseId}>
            <img src={character.image} alt="" />
            <h3 className="character-name">{character.name}</h3>
          </article>
        ))}
      </div>
    </>
  );
};

export default EjercicioApp;
