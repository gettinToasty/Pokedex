import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { selectAllPokemon } from './reducers/selectors';
import { requestAllPokemon } from './actions/pokemon_actions';

window.selectAllPokemon = selectAllPokemon;
window.requestAllPokemon = requestAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
