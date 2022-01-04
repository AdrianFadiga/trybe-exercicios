import './App.css';
import React from 'react';

class App extends React.Component {
constructor () {
  super()
  this.state = {
    contadorUm: 0,
    contadorDois: 0,
    contadorTres: 0,
  }
  this.contadorClickUm = this.contadorClickUm.bind(this);
  this.contadorClickDois = this.contadorClickDois.bind(this);
  this.contadorClickTres = this.contadorClickTres.bind(this);
}

contadorClickUm() {
  this.setState((estadoAnterior, _props) => ({
    contadorUm: estadoAnterior.contadorUm + 1
  }))
  console.log(this.changeColor(this.state.contadorUm +1))
}

contadorClickDois() {
  this.setState((estadoAnterior, _props) => ({
    contadorDois: estadoAnterior.contadorDois + 1
  }))

}

contadorClickTres() {
  this.setState((estadoAnterior, _props) => ({
    contadorTres: estadoAnterior.contadorTres + 1
  }))
}

changeColor(num) {
  if (num % 2 === 0) {
    return 'green'
  }
  return 'white'
}

render() {
  const { contadorUm, contadorDois, contadorTres } = this.state
  return(
    <div>
    <button onClick={this.contadorClickUm} style={{ backgroundColor: this.changeColor(contadorUm) }}>{contadorUm}</button>
    <button onClick={this.contadorClickDois} style={{ backgroundColor: this.changeColor(contadorDois) }}>{contadorDois}</button>
    <button onClick={this.contadorClickTres} style={{ backgroundColor: this.changeColor(contadorTres) }}>{contadorTres}</button>
    </div>
  )
}

}

export default App;