import React from 'react';
import Pokedex from './Components/pokedex';
import NewPokedex from './Components/newPokedex';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pokedex v1.0</h1>
      <div>
        <NewPokedex />
      </div>
      <h1 className="title">Pokedex v2.0</h1>
      <div>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
