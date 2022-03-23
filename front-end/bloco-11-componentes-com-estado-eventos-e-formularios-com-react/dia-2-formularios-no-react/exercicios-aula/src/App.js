import React from 'react';
import './App.css';
import Form from './Form';
import Register from './Register';

class App extends React.Component {
  constructor () {
    super()
    this.state = { email: '' }
  }

  registerEmail = (email) => {
    console.log(email);
    this.setState({email: email})
  }

  render() {
    return(
      <main>
      <Form />
      </main>
    )
  }
}

export default App;