import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counterOne: 0,
      counterTwo: 0,
      counterThree: 0,
    }
    this.clickCounterOne = this.clickCounterOne.bind(this);
    this.clickCounterTwo = this.clickCounterTwo.bind(this);
    this.clickCounterThree = this.clickCounterThree.bind(this);
  }
  
  clickCounterOne () {
    this.setState((estadoAtual) => ({
      counterOne: estadoAtual.counterOne + 1
    }));
    console.log(this.changeColor(this.state.counterOne +1))
  }

  clickCounterTwo () {
    this.setState((estadoAtual, _props) => ({
      counterTwo: estadoAtual.counterTwo + 1
    }));
    console.log(this.changeColor(this.state.counterTwo +1))
  }

  clickCounterThree () {
    this.setState((estadoAtual, _props) => ({
      counterThree: estadoAtual.counterThree + 1
    }));
    console.log(this.changeColor(this.state.counterThree +1))
  }

  changeColor (num) {
    if (num % 2 === 0) {
      return 'green';
    }
    return 'white';
  }
  
  render() {
    return (
      <div>
      <button onClick={this.clickCounterOne} style={{ backgroundColor: this.changeColor(this.state.counterOne) }}>{this.state.counterOne}</button>
      <button onClick={this.clickCounterTwo} style={{ backgroundColor: this.changeColor(this.state.counterTwo) }}>{this.state.counterTwo}</button>
      <button onClick={this.clickCounterThree} style={{ backgroundColor: this.changeColor(this.state.counterThree) }}>{this.state.counterThree}</button>
      </div>
    )
  }
}

export default App;