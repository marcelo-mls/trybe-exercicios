import React from 'react';
import Pokedex from './Components/pokedex';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pokedex</h1>
      <input type="text" placeholder="Pesquise um Pokemon" />
      <main>
        <Pokedex />
      </main>
    </div>
  );
}

export default App;
