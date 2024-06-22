import React from 'react';
import './PokemonInfoStats.css'

const PokemonInfoStats = ({pokemon}) => {
    const maxStats = stat => {
        switch (stat) {
            case 'hp':
                return 255;
            case 'attack':
                return 190;
            case 'defense':
                return 250;
            case 'special-attack':
                return 194;
            case 'special-defense':
                return 250;
            case 'speed':
                return 180;
        }
    };

    return (
        <>
            <section className="PokemonInfoStats__section">
                <ul className="PokemonInfoStats__List">
                    {pokemon?.stats.map(stat => (
                        <li
                            className="PokemonInfoStats__Item"
                            key={stat.stat.name}
                            style={{ '--stat-percentage': `${Math.round((stat.base_stat / maxStats(stat.stat.name)) * 100)}%` }}
                        >
                            <span className='PokemonInfoStats__StatName'>{stat.stat.name.replace(stat.stat.name[0], stat.stat.name[0].toUpperCase())}</span>
                            <span className='PokemonInfoStats__StatValue'>{stat.base_stat}/{maxStats(stat.stat.name)}</span>
                            <div className="PokemonInfoStats__StatBar">
                                <div className="PokemonInfoStats__StatBar__Loader"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default PokemonInfoStats