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

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      objectWithInfo,
      text,
      multiply,
      title

    } = this.props;
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
        <div>
          {title}
          <p>{'Prop Text: ' + text}</p>
          <p>{'Prop arrayOfNumbers: ' + mappedNumbers.join(', ')}</p>
          <p>{'Prop objectWithInfo: ' + objectWithInfo.key}</p>
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Hello title={"Ready for section??"}/>
          </header>
        </div>
    );
  }
}

export default App;
