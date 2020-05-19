import React, { Component } from 'react';
import PokeCard from './PokeCard';
import './PokeDex.css';

class PokeDex extends Component {
  render() {
    const { pokemons, exp, isWinner } = this.props;

    let title;
    if (isWinner) {
      title = <h1 className="PokeDex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="PokeDex-loser">Losing Hand</h1>;
    }
    return (
      <div className="PokeDex">
        {title}
        <h3>Total Experience: {exp}</h3>

        <div className="PokeDex-cards">
          {pokemons.map(({ id, ...otherProps }) => {
            return <PokeCard key={id} id={id} {...otherProps} />;
          })}
        </div>
      </div>
    );
  }
}

export default PokeDex;
