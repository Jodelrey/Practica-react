import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [selectedID, setSelectedID] = useState(1);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${selectedStatus}`
      )
      .then((response) => {
        setCharacters(response.data.results);
        setPages(response.data.info.pages);
      });
  }, [currentPage, selectedStatus]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${selectedID}`)
      .then((response) => {
        setSelectedCharacter(response.data);
      });
  }, [selectedID]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <select onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        {characters.map((character) => (
          <div key={character.id} onClick={() => setSelectedID(character.id)}>
            <img src={character.image} />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
      <div>
        {Array(pages)
          .fill()
          .map((page, index) => (
            <span key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </span>
          ))}
      </div>
      <div>
        <h1>{selectedCharacter.name}</h1>
        <img src={selectedCharacter.image} />
        <p>{selectedCharacter.status}</p>
        <p>{selectedCharacter.species}</p>
      </div>
    </>
  );
};

export default App;
