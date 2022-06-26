import React from 'react';
import Pokemons from './pokemons';
import pokemonsList from '../Data/data';
import '../Styles/pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        { pokemonsList.map((pokemon) => (
          <Pokemons
            name={ pokemon.name }
            type={ pokemon.type }
            weight={ `${pokemon.averageWeight.value} kg` }
            image={ pokemon.image }
            key={ pokemon.name }
          />
        )) }
      </section>
    );
  }
}

export default Pokedex;
