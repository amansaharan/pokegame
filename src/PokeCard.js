import React, { Component } from 'react';
import './PokeCard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class PokeCard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const threeDigitId = `00${id}`.slice(-3);
    let imgSrc = `${POKE_API}${threeDigitId}.png`;
    return (
      <div className="PokeCard">
        <h1>{name}</h1>
        <div className="PokeCard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div>Type: {type}</div>
        <div>Experience: {base_experience}</div>
      </div>
    );
  }
}

export default PokeCard;
