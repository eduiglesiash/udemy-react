import React, {Component} from 'react';

export default class Forms extends Component {

  constructor() {
    super()
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('State: ', this.state)
  }

  handleChange = (e) => {
    console.log('handleChange: ', e.target.checked)
    this.setState({inputTerms: e.target.checked})
  }

  render() {
    return (
        <div>
          <p>Forms Component</p>
          <form action="" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend> Datos del usuario</legend>
              <div>
                <label htmlFor={'name01'}>Name: </label>
                <input
                    id={'name01'}
                    name={'name01'}
                    type="text"
                    placeholder='Introduce tu nombre de usuario'
                    ref={inputElement => this.inputName = inputElement}
                    value={this.state.inputName}
                    onChange={e => this.setState({inputName: e.target.value})}/>
              </div>
              <div>
                <label htmlFor={'twitter01'}>Cuenta de twitter: </label>
                <input
                    id={'twitter01'}
                    name={'twitter01'}
                    type="text"
                    placeholder='Introduce tu usuario twitter'
                    value={this.state.inputTwitter}
                    onChange={e => this.setState({ inputTwitter: e.target.value})}/>
              </div>

              <div>
                <label htmlFor={'terms01'}>
                  <input
                      id={'terms01'}
                      name={'terms01'}
                      type="checkbox"
                      onChange={this.handleChange}
                      checked={this.state.inputTerms}/>
                  Accept Terms
                </label>
              </div>

              <input
                  type={'submit'}
                  value={"Enviar"}/>
            </fieldset>
          </form>
        </div>
    )
  }
}