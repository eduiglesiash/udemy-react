import React, {Component} from 'react'


class ComponenteADesmontar extends Component {

  state = {windowWidth: 0};

  _updateStateWithWindowWidth = ()=>{
    console.log('_updateStateWithWindowWidth');
    this.setState({
      windowWidth: document.body.clientWidth
    })
  };

  componentDidMount(){
    this._updateStateWithWindowWidth();
    window.addEventListener(
        'resize',
        this._updateStateWithWindowWidth
    )
  }

  // Memory leaks
  componentWillUnmount(){
    console.log('componentWillUnmount');
    window.removeEventListener(
        'resize',
        this._updateStateWithWindowWidth
    )
  }

  render() {
    return (
        <div>
          <p>Ancho de la ventana: {this.state.windowWidth}</p>
        </div>
    )
  }
}

class ComponentWillUnmout extends Component {
  state = { showComponent: true};
  render() {

    if(this.state.showComponent){
      return (
          <div>
            <h2>Example of componente WillUnMount</h2>
            <ComponenteADesmontar />
            <button
              onClick={()=> this.setState({showComponent: false})}
              > Componente a desmontar
            </button>
          </div>
      )
    }
    return(
        <p>Componente desmontado</p>
    )
  }
}

export default ComponentWillUnmout