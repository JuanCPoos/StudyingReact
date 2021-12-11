import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Import Components
import MiComponente from './components/MiComponente';

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
        <section className='componentes'>
          
          <MiComponente />

        </section>
      </header>
    </div>
  );
}

export default App;
