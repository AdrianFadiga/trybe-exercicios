import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { checkbox, handleChange } = this.props;
    return(
      <input type='checkbox' name='checkbox' value={checkbox} onClick={handleChange}></input>
    )
  }
}

export default Checkbox;