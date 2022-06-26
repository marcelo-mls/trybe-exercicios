import React from 'react';
import Pokemons from './pokemons';
import pokemonsList from '../Data/data';
import '../Styles/pokedex.css';
import ButtonStyles from './buttonType';

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

  fectchTypes() {
    return [...new Set(pokemonsList.map((pokemon) => pokemon.type))];
  }

  render() {
    const { filteredType } = this.state;
    const listOfTypes = this.fectchTypes();
    return (
      <div>
        <button type="button" onClick={ () => this.filter('') }>All</button>
        <div className="buttons">
          { listOfTypes.map((type) => (
            <ButtonStyles type={ type } key={ type } click={ () => this.filter(type) } />
          )) }
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
