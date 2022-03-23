import React from 'react';
import Name from './Name'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: ''
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value.toUpperCase()
    })
  }
  
  render() {
    const { value, name, email } = this.state;
    return (
      <form>
        <fieldset>
        <Name value={name} handleChange={this.handleChange}/>
          <input type='email' name='email' onChange={this.handleChange} value={email}></input>
        
        </fieldset>
      </form>
    )
  }
}

export default Form;