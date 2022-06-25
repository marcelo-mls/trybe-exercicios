import React from 'react';
import './App.css';
import colors from './data/Colors';

class App extends React.Component {

  constructor() {
    super()

    this.setFilterVAlue = this.setFilterVAlue.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      clicks: 0,
      color: '#282c34'
    }

  }

  setFilterVAlue(event) {
    console.log(event.target.value)
  }
  
  handleClick(event) {

    this.setState((stt) => ({
      clicks: event.target.id === 'limparBtn' ? 0 : stt.clicks + 1
    }))

    this.setState((stt) => ({
      color: event.target.style.color
    }))

    console.log(this.state.color)

    }

  render() {
    return (
      <div className='App'>

        <input
          id='inputColor'
          type='text'
          placeholder='Digite uma cor'
          onChange={ this.setFilterVAlue }
        />

        <ul>
          { colors.map((color) => (

          <li key={ color.hex }>
            <span
              className='colorDisplay'
              style={{ backgroundColor: color.hex }}>
            </span>
            { `${color.name}` }
          </li>

          )) }
        </ul>

        <section
          className='exState'
          style={{ backgroundColor: this.state.color }}
        >

        <p>Exercício de Fixação</p>

        <button
          id='greenBtn'
          onClick={ this.handleClick }
          style={{ color: 'green' }}
        >Verde</button>
        <button
          id='redBtn'
          onClick={ this.handleClick }
          style={{ color: 'red' }}
        >Vermelho</button>

        <p>{`Nº de Cliques: ${this.state.clicks}`}</p>

        <button
          id='limparBtn'
          onClick={ this.handleClick }
          style={{ color: '#282c34' }}
        >Limpar</button>

      </section>

      </div>
    );
  }
}

export default App;
