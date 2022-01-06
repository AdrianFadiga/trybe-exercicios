import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight } = this.props;
    return (
      <Pokemon>{name}, {type}</Pokemon>
    )
  }
}

export default Pokemon;
