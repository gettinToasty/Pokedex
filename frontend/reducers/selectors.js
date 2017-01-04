export const selectAllPokemon = state => {
  return Object.keys(state.pokemon).map((key) => {
    return state.pokemon[key];
  });
};
