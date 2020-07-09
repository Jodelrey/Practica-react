import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Card = styled.article`
display: flex:
flex-direction: column;
align-items: center;
width: 400px;
height: 500px;
background-color: #6585ab;
`;

const Name = styled.h2`
  font-size: 30px;
  font-family: "Helvetica";
  text-align: center;
  color: white;
`;

const Details = styled.p`
  font-size: 20px;
  font-family: "Helvetica";
  text-align: center;
  color: white;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    };
    getCharacter();
  }, [id]);
  return (
    <Card>
      <Name>{character.name}</Name>
      <Details>{character.status}</Details>
      <Details>{character.species}</Details>
      <Img src={`${character.image}`} />
    </Card>
  );
};

export default CharacterPage;
