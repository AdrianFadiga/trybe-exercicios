import React from 'react';
import Checkbox from './Checkbox'
import TextArea from './TextArea'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      textarea: '',
      checkbox: false
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
    [name]: value 
    })
    console.log(this.state[name])
  };
  
  render() {
    const { name, email, textarea, checkbox } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <h1>Formulário React:</h1>
        <form className='form'>
          <input type='name' name='name' value={name} onChange={handleChange}></input>
          <input type='email' name='email' value={email} onChange={handleChange} ></input>
          <TextArea value={textarea} handleChange={this.handleChange}/>          
          <Checkbox value={checkbox} handleChange={this.handleChange}/>
        </form>
     </div>
    );
  }
}

export default Form;
