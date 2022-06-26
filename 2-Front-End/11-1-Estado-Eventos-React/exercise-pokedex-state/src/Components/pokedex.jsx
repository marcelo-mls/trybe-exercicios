import React from 'react';
import Pokemons from './pokemons';
import pokemonsList from '../Data/data';
import '../Styles/pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredType: '',
    };
  }

  filter(type) {
    this.setState({
      filteredType: type,
    });
  }

  render() {
    const { filteredType } = this.state;
    return (
      <div>
        <button type="button" onClick={ () => this.filter('') }>Todos</button>
        <div className="buttons">
          <button type="button" onClick={ () => this.filter('Electric') }>Eletric</button>
          <button type="button" onClick={ () => this.filter('Fire') }>Fire</button>
          <button type="button" onClick={ () => this.filter('Bug') }>Bug</button>
          <button type="button" onClick={ () => this.filter('Poison') }>Poison</button>
          <button type="button" onClick={ () => this.filter('Psychic') }>Psychic</button>
          <button type="button" onClick={ () => this.filter('Normal') }>Normal</button>
          <button type="button" onClick={ () => this.filter('Dragon') }>Dragon</button>
        </div>
        <section className="oldPokedex">
          { pokemonsList.filter((poke) => poke.type.includes(filteredType))
            .map((pokemon) => (
              <Pokemons
                name={ pokemon.name }
                type={ pokemon.type }
                weight={ `${pokemon.averageWeight.value} kg` }
                image={ pokemon.image }
                key={ pokemon.name }
              />
            )) }
        </section>
      </div>
    );
  }
}

export default Pokedex;
