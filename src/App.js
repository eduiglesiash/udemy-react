import React, {Component} from 'react';
import PropTypes from 'prop-types'
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

class Box extends Component {
  render(){
    return(
        <div style={{border: '1px solid #000', margin: '5px', padding: '10px' }}>
          {this.props.children}
        </div>
    )
  }
}

class Article extends Component{
  // Con las propTypes, podemos indicar que tipo de propiedad
  // estamos esperando recibir. Además podemos indicarle si la propiedad
  // es requerida o no. Este tipo de avisos solo se muestra en desarrollo y no en producción.
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render(){
    const {author, title, date, children} = this.props
    return(
        <section>
          <h2>{title}</h2>
          {/* CONDICION BOOLEANA*/}
          {author && <p><em>Write by {author}</em></p>}
          <Box>{date}</Box>
          <article>
            {children}
          </article>
        </section>
    )
  }
}

// Article.propTypes = {
//   author: PropTypes.string
// }

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Hello title={"Ready for start Section7"}/>
          </header>
          <h1>Children y PropTypes</h1>
          <Article

              date={new Date().toLocaleDateString()}
              title={"Artículo sobre la prop del children"}
          >
            <p>El contenido que envolvemos denotr del componente Article será evníado al componente como <code>this.props.children</code></p>
            <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>

          </Article>
        </div>
    );
  }
}

export default App;
