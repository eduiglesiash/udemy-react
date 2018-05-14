import React, {Component} from 'react';

import Forms from './section/form'
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
  constructor(){
    super()
    this.state = {
      mouseX: 0,
      mouseY: 0
    }
    /*
    * El contexto en el que se esta ejecutando handleMouseMove no es el que creemos. Al apuntar a "this" creemos que se ejecutará en el contexto del componente y podremos actualizar su "state", pero al ejecutarse en respuesta un evento del navegador el contexto no será el del componente, por lo que no podremos actualizar su "state".
    * Tenemos que asegurarnos que el contexto en el que se ejecuta es el que esperamos y para eso debemos enlazar en contexto al método.
    *
    * Para ello podemos usar dos formas sencillo.
    * 1º Enlazar el método que controla el evento, en el constructor de nuestro componente utilizando la propiedad bind de javascript
    * El método bind devuelve el mismo método pero con el contexto correcto.
    * */
    // this.handleMouseMove = this.handleMouseMove.bind(this);

    /*
    * 2º Forma y más limpia es usando una arrow function desde nuestro metodo de la clase, ya que las arrow function enlazan siempre el contexto desde donde se declaran.
    *
    * */
  }
  handleClick = (e) => {
    console.log('handleClick with syntetic event: ', e);
    console.log('handleClick with nativeEvent: ', e.nativeEvent);
    alert('Hi here!!!')
  }
  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    })
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Hello title={"Ready for start Section6"}/>
          </header>
          <h2>Events</h2>
          <button onClick={this.handleClick}>HI THERE!!!</button>
          <div
              onMouseMove={this.handleMouseMove}
              style={{margin: 10, padding: 0, border: '1px solid black'}}>
            <p>{this.state.mouseX}, {this.state.mouseY}</p>
          </div>

          <hr/>

          <h2>Forms</h2>
          <Forms />
        </div>
    );
  }
}

export default App;