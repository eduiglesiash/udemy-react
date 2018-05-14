import React, {Component} from 'react';
import ConditionalSection from './section/conditional'
import cars from './data/cars.json'
import logo from './logo.svg';
import './App.css';


class CarItem extends Component {
  render() {
    const {car} = this.props;
    return (
        <li>
          <p><strong>Nombre: </strong>{car.name}</p>
          <p><strong>Marca: </strong>{car.company}</p>
        </li>
    )
  }
}

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5, 6]
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </header>
          <h2> Ready for start</h2>
          <ConditionalSection/>

          <hr/>
          <h2>Trabajando con listas Array</h2>
          {
            numbers.map((number, index) => {
              return <p key={index}>Soy el numero: {number}</p>
            })
          }

          <hr/>
          <h2>Trabajando con listas objetos</h2>
          <ul>
            {
              cars.map(car => {
                return <CarItem key={car.id} car={car}/>
              })
            }
          </ul>
        </div>
    );
  }
}

export default App;
