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

class Title extends Component {
  render(){
    return (
        <div>
          <h2>Title Component</h2>
          <h3>{this.props.text}</h3>
        </div>
        )
  }
}

Title.defaultProps = {
  text: "Title for default"
}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { counter: this.props.counterInitial };
    setInterval(() => {
      this.setState({counter: this.state.counter +1})
    }, 1000)
  }
  render(){
    console.log('Counter Number Render()');
    return (
        <div>
          <h2>Counter Component</h2>
          <CounterNumber number={this.state.counter} />
        </div>
    )
  }
}


Counter.defaultProps = {
  counterInitial: 0
}

class CounterNumber extends Component {
  render () {
    return (
        <div>
          <h2>Component CounterNumber</h2>
          <span>{ this.props.number }</span>
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
            <Hello title={"Hello from props"}/>
          </header>
          <Text
              arrayOfNumbers={[1, 3, 6]}
              objectWithInfo={{key: 'Uno', key2: 'Dos'}}
              text={"This is my component text"}
              multiply={(number) => number * 8}
              title={<h1>This is the title</h1>}
          />
          <Title text={"Title not default"}/>
          <Counter counterInitial={500}/>
        </div>
    );
  }
}

export default App;
