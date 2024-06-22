import React from 'react'
import { useOutletContext, useParams } from 'react-router'
import PokemonInfoEvolution from './PokemonInfoEvolution';
import PokemonInfoInfo from './PokemonInfoInfo';
import PokemonInfoStats from './PokemonInfoStats';

const PokemonInfo = () => {
    const { info } = useParams();
    const { pokemon, evolutions } = JSON.parse(JSON.stringify(useOutletContext()));

    switch (info) {
        case 'info':
            return <PokemonInfoInfo />;
        case 'stats':
            return <PokemonInfoStats pokemon={pokemon}/>;
        case 'evolution':
            return <PokemonInfoEvolution pokemon={pokemon} evolutions={evolutions}/>;
    }
}

export default PokemonInfo