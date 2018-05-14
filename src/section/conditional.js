import React, { Component } from 'react'


class LoginButton extends Component {
  render(){
    return <button>Iniciar Sesión</button>
  }
}

class LogoutButton extends Component {
  render(){
    return (
        <div>
          <p>Bienvenido</p>
          <button>Cerrar Sessión</button>
        </div>
    )
  }
}

export default class ConditionalSection extends Component {
  constructor(){
    super()
    this.state = {isUserLogged: false}
  }
  render(){
    return (
        <div>
          <h4>Condition Rendering</h4>
          { this.state.isUserLogged ? <LogoutButton/> :  <LoginButton/> }
        </div>
    )
  }
}