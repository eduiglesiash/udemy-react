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

// class Button extends Component {
//   render() {
//     return (
//         <button
//             style={{
//               borderColor: this.props.borderColor,
//               display: 'block'
//             }}
//         > {this.props.label}
//         </button>
//     )
//   }
// }
// Button.defaultProps = {
//   borderColor: '#09f'
// }
//
// class ButtonDanger extends Component {
//   render(){
//     return <Button
//         borderColor={"red"}
//         label={this.props.label}
//     />
//   }
// }
//
// class ButtonWithLegend extends Component {
//   render(){
//     return(
//         <div>
//           <Button
//           label={this.props.label}
//           borderColor={this.props.borderColor}/>
//           <small>{this.props.legend}</small>
//         </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Hello title={"Ready for section 9"}/>
          </header>
          <h2>Stateless Components</h2>

        </div>
    );
  }
}

export default App;
