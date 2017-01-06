import React from 'react';
import { Link } from 'react-router';


const imgStyle = {
  height: 'auto',
  width: '20px',
  margin: '0 10px'
};

export const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.image_url} style={imgStyle} />
      {pokemon.name}
    </Link>
  </li>
);
