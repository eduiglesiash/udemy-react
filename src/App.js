import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


/*function Hello (props){
  return <h1 className="App-title">{props.title}</h1>
}*/

// const Hello = (props) => <h1 className="App-title">{props.title}</h1>;

class Hello extends Component {
  render() {
    return (
        <h1 className="App-title">{this.props.title}</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Hello title={"Ready for section8"}/>
          </header>
          <h1>Lifecycle</h1>
          <p>Cuando hablamos de ciclo de vida de un componentes, hablamos de las diferentes fases de ejecución por las que pasa un componente de React</p>
          <p>El ciclo de vida de los componentes se divide en tres fases</p>
          <ul>
            <li>Montaje</li>
            <li>Actualización</li>
            <li>Desmontaje</li>
          </ul>
          <section>
            <h2>MONTAJE</h2>
            <p>Es la primera fase que se ejecuta</p>
            <p>Se ejecuta siempre y solo lo hace una vez</p>
            <p>Se encarga de construir el componente con su estado inicial y obtiene las props</p>
            <p>Como buena práctica si tenemos objetos de clase que acceden al contexto, tenemos que bindearlo aquí.</p>
            <p>Se ejecuta por primera vez el método render()</p>

          </section>
          <section>
            <h2>ACTUALIZACION</h2>
            <p>Por defecto se ejecuta cada vez que recibe props o se actualiza su estado</p>
            <p>Podemos controlar cuando el componente necesita renderizarse de nuevo</p>
          </section>
          <section>
            <h2>DESMONTAJE</h2>
            <p>Eliminamos listeners</p>
            <p>Eliminamos referencias al DOM</p>
          </section>
        </div>
    );
  }
}

export default App;
