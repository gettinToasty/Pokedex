export const selectAllPokemon = state => {
  return Object.keys(state.pokemon).map(key => {
    return state.pokemon[key];
  });
};

export const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items.find(item => {
    return item.id === itemId;
  });
};
