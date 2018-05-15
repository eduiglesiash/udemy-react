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
        </div>
    );
  }
}

export default App;
