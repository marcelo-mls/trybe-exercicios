import React from 'react';
import './App.css';
import colors from './data/Colors';

class App extends React.Component {

  constructor() {
    super()

    this.setFilterValue = this.setFilterValue.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      clicks: 0,
      color: '#282c34',
      filter: ''
    }
  }

  setFilterValue(event) {
    this.setState({ filter: event.target.value})
  }
  
  handleClick(event) {
    this.setState((stt) => ({
      clicks: event.target.id === 'limparBtn' ? 0 : stt.clicks + 1
    }))

    this.setState({ color: event.target.style.color })
  }

  render() {
    return (
      <div className='App'>

        <section className='exState' style={{ backgroundColor: this.state.color }}>
          <p>Exercício de Fixação</p>

          <button onClick={this.handleClick} style={{ color: 'green' }}>
            Verde
          </button>
          <button onClick={this.handleClick} style={{ color: 'red' }}>
            Vermelho
          </button>

          <p>{`Nº de Cliques: ${this.state.clicks}`}</p>

          <button id='limparBtn' onClick={this.handleClick} style={{ color: '#282c34' }}>
            Limpar
          </button>
        </section>

        <h2>Pesquise uma Cor</h2>
        <input type='text' placeholder='Digite uma cor' onChange={ this.setFilterValue }/>
        <p>{ this.state.filter ?
          `A cor pesquisada foi: ${ this.state.filter }` : 'Aguardando...' }
        </p>
        <ul>
          { colors.filter((color) => color.name.includes(this.state.filter))
            .map((color) => (
              <li key={ color.hex }>
                <span className='colorDisplay' style={{ backgroundColor: color.hex }}></span>
                { `${color.name}` }
              </li>
              ))
          }
        </ul>

      </div>
    );
  }
}

export default App;
