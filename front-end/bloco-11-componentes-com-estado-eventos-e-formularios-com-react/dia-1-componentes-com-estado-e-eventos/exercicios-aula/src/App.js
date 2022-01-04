import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      botaoUm: 0,
      botaoDois: 0,
      botaoTres: 0,
    }
    this.contadorBotaoUm = this.contadorBotaoUm.bind(this);
    this.contadorBotaoDois = this.contadorBotaoDois.bind(this);
    this.contadorBotaoTres = this.contadorBotaoTres.bind(this);
  }

  contadorBotaoUm () {
    this.setState((estadoAtual, _props) => ({
      botaoUm: estadoAtual.botaoUm +1
    }))
    if (this.state.botaoUm % 2 !== 0 && this.state.botaoUm !== 0) {
      console.log(this.state.botaoUm + 1);
    }
  }
  contadorBotaoDois () {
    this.setState((estadoAtual, _props) => ({
      botaoDois: estadoAtual.botaoDois +1
    }))
    if (this.state.botaoDois % 2 !== 0 && this.state.botaoDois !== 0) {
      console.log(this.state.botaoDois + 1);
    }
  }
  contadorBotaoTres () {
    this.setState((estadoAtual, _props) => ({
      botaoTres: estadoAtual.botaoTres +1
    }))
    if (this.state.botaoTres % 2 !== 0 && this.state.botaoTres !== 0) {
      console.log(this.state.botaoTres + 1);
    }
  }

  changeColor () {

  }

  render() {
    return (
      <div>
      <button onClick={this.contadorBotaoUm} style={{ backgroundColor: 'red' }}>{this.state.botaoUm}</button>
      <button onClick={this.contadorBotaoDois} style={{ backgroundColor: 'red' }}>{this.state.botaoDois}</button>
      <button onClick={this.contadorBotaoTres} style={{ backgroundColor: 'red' }}>{this.state.botaoTres}</button>
      </div>
    )
  }
}

export default App;