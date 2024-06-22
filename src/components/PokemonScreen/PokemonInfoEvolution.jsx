import React from 'react';
import './PokemonInfoEvolution.css';
import pokeballImg from '../../../public/assets/icons/pokeball.svg';

const PokemonInfoEvolution = ({ pokemon, evolutions }) => {
  return (
    <section className="PokemonInfoEvolution">
      <p className='PokemonInfoEvolution__description'>Este contenido estará disponible próximamente</p>
      <div className="PokemonInfoEvolution__img">
        <img src={pokeballImg} alt="" />
      </div>
    </section>
  )

  if (evolutions === null) return (<p><mark>Este pokemon no tiene evoluciones conocidas</mark></p>);

  return (<p><mark>Tiene al menos una evolución</mark></p>)
}

export default PokemonInfoEvolution