import './App.css';
import colors from './data/Colors';

function setFilterVAlue(event) {
  console.log(event.target.value)
}

function App() {
  return (
    <div className='App'>

      <input
        id='inputColor'
        type='text'
        placeholder='Digite uma cor'
        onChange={ setFilterVAlue }
      />

      <ul>
        { colors.map((color) => (

        <li key={ color.hex }>
          <span className='colorDisplay' style={{ backgroundColor: color.hex }}></span>
          { `${color.name}` }
        </li>

        )) }
      </ul>

    </div>
  );
}

export default App;
