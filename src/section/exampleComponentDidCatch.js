import React, {Component} from 'react'


class ButtonLunchError extends Component {
  state = {throwError: false}

  render() {
    if (this.state.throwError) {
      throw new Error(' Error lanzado por el boton ')
    }
    return (
        <button
            onClick={() => this.setState({throwError: true})}
        >
          Lanzar Error!
        </button>
    )
  }
}

class ExampleComponentDidCatch extends Component {

  state = {hasError: false, erroMsg: ''}

  componentDidCatch(error, errorInfo){
    console.log('componentDidCatch');
    console.log({error, errorInfo})
    this.setState({
      hasError: true,
      errorMsg: error.toString()
    })
  }
  render() {
    if(this.state.hasError){
      return(
          <div>
            <p>Error in the component: {this.state.errorMsg}</p>
            <button
              onClick={()=> {this.setState({hasError: false})}}
            >
              Return to app
            </button>
          </div>
      )
    }
    return (
        <div>
          <h2>Example Component Did Catch</h2>
          <ButtonLunchError/>
        </div>
    )
  }
}

export default ExampleComponentDidCatch
