import React from 'react';

class Name extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <input type='text' name='name' onChange={handleChange} value={name}></input>
    )
  }
}

export default Name;