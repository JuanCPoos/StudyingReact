import logo from './logo.svg';
import './App.css';

function HolaMundo(nombre, edad){
  var presentacion = (
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>
  );
  

  return presentacion;
}

function App() {
  var nombre = "Juan";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to course React 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre, 31)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
