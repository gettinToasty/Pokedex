import React from 'react';
import { Link } from 'react-router';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestPokemon(newProps.params.pokemonId);
    }
  }

  render() {

    const itemStyle = {
      height: '50px',
      width: 'auto',

    };

    return (
      <div>
        <img src={this.props.pokemon.image_url} />
        <h3>{this.props.pokemon.name}</h3>
        <h4>Type: {this.props.pokemon.poke_type}</h4>
        <h4>ATK: {this.props.pokemon.attack}</h4>
        <h4>DEF: {this.props.pokemon.defense}</h4>
        <h4>Moves:</h4>
        <ul>
          {this.props.pokemon.moves.map((move, i) => (
            <p key={i}>{move}</p>
          ))}
        </ul>
        <h4>Items:</h4>
        <div>
          {this.props.pokemon.items.map(item => (
            <Link
              key={item.id}
              to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`} >
              <img src={item.image_url} style={itemStyle} />
            </Link>
          ))}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
