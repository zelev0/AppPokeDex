import React from 'react'
import { useOutletContext } from 'react-router';
import './PokemonInfoInfo.css';

const PokemonInfoInfo = () => {
    let { pokemon } = JSON.parse(JSON.stringify(useOutletContext()));
    const typeClass = typePokemon => {
        switch (typePokemon) {
            case 'normal':
                return 'PokemonCard__Normal';
            case 'fire':
                return 'PokemonCard__Fire';
            case 'water':
                return 'PokemonCard__Water';
            case 'electric':
                return 'PokemonCard__Electric';
            case 'grass':
                return 'PokemonCard__Grass';
            case 'ice':
                return 'PokemonCard__Ice';
            case 'fighting':
                return 'PokemonCard__Fighting';
            case 'poison':
                return 'PokemonCard__Poison';
            case 'ground':
                return 'PokemonCard__Ground';
            case 'flying':
                return 'PokemonCard__Flying';
            case 'psychic':
                return 'PokemonCard__Psychic';
            case 'bug':
                return 'PokemonCard__Bug';
            case 'rock':
                return 'PokemonCard__Rock';
            case 'ghost':
                return 'PokemonCard__Ghost';
            case 'dragon':
                return 'PokemonCard__Dragon';
            case 'dark':
                return 'PokemonCard__Dark';
            case 'steel':
                return 'PokemonCard__Steel';
            case 'fairy':
                return 'PokemonCard__Fairy';
            case 'shadow':
                return 'PokemonCard__Shadow';
            default:
                return 'PokemonCard__Unknown';
        }
    };

    return (
        <>
            <section className='PokemonInfoInfo__section'>
                <h2 className='PokemonInfoInfo__section__title'>Habilidades</h2>
                <ul className='PokemonInfoInfo__section__list'>
                    {pokemon.abilities.map(el => (
                        <li key={el.ability.url} className='PokemonInfoInfo__section__item'>
                            {el.ability.name.replace(el.ability.name[0], el.ability.name[0].toUpperCase())}
                        </li>
                    ))}
                </ul>
            </section>
            <section className='PokemonInfoInfo__section PokemonInfoInfo__section--shadow'>
                <h2 className='PokemonInfoInfo__section__title PokemonInfoInfo__section__title--transparent'>Tipo</h2>
                <ul className='PokemonInfoInfo__section__list'>
                    {pokemon.types.map(el => (
                        <li key={el.type.url} className={`PokemonInfoInfo__section__item PokemonInfoInfo__section__item--color ${typeClass(el.type.name)}`}>
                            {el.type.name.replace(el.type.name[0], el.type.name[0].toUpperCase())}
                        </li>
                    ))}
                </ul>
            </section>
            <section className='PokemonInfoInfo__section'>
                <h2 className='PokemonInfoInfo__section__title'>Características</h2>
                <ul className='PokemonInfoInfo__section__list'>
                    <li className='PokemonInfoInfo__section__item'><span className='PokemonInfoInfo__section__item__span'>Peso: </span>{pokemon.weight}</li>
                    <li className='PokemonInfoInfo__section__item'><span className='PokemonInfoInfo__section__item__span'>Altura: </span>{pokemon.height}</li>
                </ul>
            </section>
        </>
    )
}

export default PokemonInfoInfo