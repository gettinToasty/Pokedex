import React from 'react';

const imgStyle = {
  height: '20px',
  width: 'auto'
};

export const PokemonIndexItem = ({pokemon}) => (
  <li>
    <img src={pokemon.image_url} style={imgStyle} />
    {pokemon.name}
  </li>
);
