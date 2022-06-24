import React from 'react';
import Pokemons from './pokemons';
import pokemonsList from '../Data/data';
import './pokedex.css';

class Pokedex extends React.Component {
  render () {

    return (
      <section>
        { pokemonsList.map((pokemon) =>
            <Pokemons
              name={ pokemon.name }
              type={ pokemon.type }
              weight={ `${pokemon.averageWeight.value} kg` }
              image={ pokemon.image }
            />
          )
        }
      </section>
    );
    
  }
}

export default Pokedex;
