import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/pokemons.css';

class Pokemons extends React.Component {
  render() {
    const { name, type, weight, image } = this.props;

    return (
      <div className="pokemonCard">
        <aside className="asideImage">
          <img src={ image } alt={ name } />
        </aside>

        <aside className="asideInfo">
          <p className="nameInfo">{name}</p>
          <p>{type}</p>
          <p>{weight}</p>
        </aside>
      </div>
    );
  }
}

Pokemons.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Pokemons;
