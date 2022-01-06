import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './Data';

class Pokedex extends React.Component {
  render () {
    return (
      <Pokemon name={pokemons[0].name}></Pokemon>
    )
  }
}

export default Pokedex;
