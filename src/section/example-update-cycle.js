import React, {Component} from 'react'
import PropTypes from 'prop-types'


const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImages extends Component{

  state = {src: ANIMAL_IMAGES[this.props.animal]}


  componentWillReceiveProps (nextProps){
    // nextProps pueden ser las mismas props que tenemos
    // pero entrará igualmente a este método
    // Nuevas props no quiere decir que sean distintas
    // a las que teníamos.
    // Este metodo siempre se invocará cuando el componente padre el envié nuevas props
    // aunque sean iguales a las actuales.

    console.log('1. ComponentWillReceiveProps');
    console.log('nextProps: ', nextProps)
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
  }

  shouldComponentUpdate(nextProps) {
    console.log('2. shouldComponentUpdate');
    console.log('before: ', this.props.animal);
    console.log('after: ', nextProps.animal);
    // Hay que devolver un booleano
    // Si este método nos exsite, se devulev true por defecto.
    return this.props.animal !== nextProps.animal
  }
  render(){
    console.log('1. al Montar / 3. al actualizar -> Render')
    return(
        <div>
          <p> Selected: {this.props.animal}</p>
          <img
              src={this.state.src}
              alt={this.props.animal}
              width='250'
          />
        </div>
    )
  }
}

AnimalImages.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
};

AnimalImages.defaultProps = {
  animal: 'panda'
}



class ExampleUpdateCycle extends Component{
  state = {animal: 'panda'}
  _renderAnimalButton = (animal) => {
    return (
        <button
            //disabled={animal === this.state.animal}
            key={animal}
            onClick={()=> this.setState({animal: animal})}
        > {animal}
        </button>
    )
  }
  render(){
    return (
        <div>
          <h2>Component ExampleUpdateCycle Ready</h2>
          <h3>Ejemplo de ShouldComponentUpdate</h3>
          <div>
            {ANIMALS.map(this._renderAnimalButton)}

            <AnimalImages animal={this.state.animal}/>
          </div>
        </div>
    )
  }
}


export default ExampleUpdateCycle