import React, { Component } from 'react';
import PokeDex from './PokeDex';

class PokeGame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];

    while (hand1.length < hand2.length) {
      let randomPokemonIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomPokemonIndex, 1)[0];
      hand1.push(randomPokemon);
    }

    // const totalExpHand1 = hand1.map((p) => {
    //   let exp1 = 0;
    //   return (exp1 += p.base_experience);
    // });
    // const totalExpHand2 = hand2.map((p) => {
    //   let exp2 = 0;
    //   return (exp2 += p.base_experience);
    // });

    let exp1 = hand1.reduce(
      (accumulator, pokemon) => accumulator + pokemon.base_experience,
      0
    );
    let exp2 = hand2.reduce(
      (accumulator, pokemon) => accumulator + pokemon.base_experience,
      0
    );

    return (
      <div>
        <PokeDex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <PokeDex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default PokeGame;
