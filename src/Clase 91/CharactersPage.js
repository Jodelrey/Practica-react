import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: #6585ab;
  margin: 10px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const Name = styled.h2`
  font-size: 20px;
  font-family: "Helvetica";
  text-align: center;
  color: white;
`;

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const history = useHistory();
  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${search}`
      );
      const data = await response.json();
      setCharacters(data.results);
    };
    getCharacters();
  }, [search]);

  const handleClick = (id) => {
    history.push(`/character/${id}`);
  };

  return (
    <Container>
      {characters.map((character) => (
        <Card onClick={() => handleClick(character.id)} key={character.id}>
          <Name>{character.name}</Name>
          <Img src={character.image} />
        </Card>
      ))}
    </Container>
  );
};

export default CharactersPage;
