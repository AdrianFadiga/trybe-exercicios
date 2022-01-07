import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <textarea name='textarea' value={value} onChange={handleChange}></textarea>
    )
  }
}

export default TextArea;