import React from 'react';
import Pokemons from './pokemons';
import pokemonsList from '../Data/data';
import '../Styles/pokedex.css';

class NewPokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
    };
  }

  handleBtnPrev() {
    const limit = pokemonsList.length - 1;
    this.setState((prevState) => ({
      pokemonIndex: prevState.pokemonIndex <= 0
        ? limit : prevState.pokemonIndex - 1,
    }));
  }

  handleBtnNext() {
    const limit = pokemonsList.length - 1;
    this.setState((prevState) => ({
      pokemonIndex: prevState.pokemonIndex >= limit
        ? 0 : prevState.pokemonIndex + 1,
    }));
  }

  render() {
    const { pokemonIndex } = this.state;
    const pokemon = pokemonsList[pokemonIndex];
    return (
      <section className="newPokedex">
        <div className="divBtn">
          <button type="button" onClick={ () => this.handleBtnPrev() }>Previous</button>
        </div>
        <Pokemons
          name={ pokemon.name }
          type={ pokemon.type }
          weight={ `${pokemon.averageWeight.value} kg` }
          image={ pokemon.image }
        />
        <div className="divBtn">
          <button type="button" onClick={ () => this.handleBtnNext() }>Next</button>
        </div>
      </section>
    );
  }
}

export default NewPokedex;
