import React, {Component} from 'react';
// import LifeCycle from './section/lifecycle'
// import FetchExample from './section/fetch-example'
// import ExampleUpdateCycle from './section/example-update-cycle'
import ComponentWillUnmount from './section/componentWillUnmount'

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
            <Hello title={"Ready for Section 8"}/>
          </header>
          {/*<LifeCycle/>*/}
          {/*<FetchExample/>*/}
          {/*<ExampleUpdateCycle/>*/}
          <ComponentWillUnmount />

        </div>
    );
  }
}

export default App;
