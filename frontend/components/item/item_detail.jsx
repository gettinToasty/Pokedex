import React from 'react';

export const ItemDetail = ({ item }) => (
  <div>
    <h4>{item.name}</h4>
    <p>Happiness: {item.happiness}</p>
    <p>Price: {item.price}</p>
  </div>
);
