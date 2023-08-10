import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';//! Modulo instalado temporalmente

export default function CardVideoGame ({ id, name, image, genres, rating }) {
  return (
    <div>
      <CharactersContainer>
      <h2>Video Game: {name}</h2>
      <Link to={`/videogames/${id}`} >
        <img src={image} alt="img not found" width="500px" height="250px" />
      </Link>
      <p><strong>Genero: </strong>{typeof id === 'number'? genres.join(', ') : genres.length >= 1 && genres.map(el => el.name + ', ')}</p>
      <p><strong>Rating: </strong>{rating}</p>
      </CharactersContainer>
    </div>
  );
}

//! ESTOS SON LOS ESTILOS
const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
