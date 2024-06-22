import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import './PokemonScreen.css'

const PokemonScreen = () => {
    const { pokemon, pokemonImage, location, typeClass } = useLocation().state;
    const navigate = useNavigate();
    const triggers = useSelector(state => state.evolutionTriggers);
    const [evolutions, setEvolutions] = useState(undefined);

    useEffect(() => {
        if (Object.keys(pokemon.species).length === 0 || !pokemon.species) return setEvolutions(null);

        const getEvolutions = async () => {
            const evolutionsInit = {};
            triggers.forEach(trigger => evolutionsInit[trigger] = []);

            const specie = await axios.get(pokemon.species.url).then(res => res.data);
            
            if (Object.keys(specie.evolution_chain).length === 0 || !specie.evolution_chain) return setEvolutions(null);

            const evolutionChain = await axios.get(specie.evolution_chain.url).then(res => res.data);
            
            if (evolutionChain.chain.evolves_to.length === 0) return setEvolutions(null);

            const extractEvolutions = evolutionChain => {
                const base = evolutionChain.species;

                if (evolutionChain.evolves_to.length !== 0) return undefined;
            }
        }

        getEvolutions();
    }, []);

    return (
        <section className={`PokemonScreen ${typeClass}`}>
            <div className="PokemonScreen__ContainerPokeball">
                <div className="PokemonScreen__pokeball">
                    <div className="PokemonScreen__pokeball__rectangle"></div>
                </div>
            </div>
            <header className='PokemonScreen__header'>
                <h1 className='PokemonScreen__title'>
                    <span className='PokemonScreen__title__name'>{pokemon.name}</span>
                    <span className='PokemonScreen__title__id'>#{pokemon?.id < 10 ? `00${pokemon?.id}` : pokemon?.id < 100 ? `0${pokemon?.id}` : pokemon?.id}</span>
                </h1>
                <div className="PokemonScreen__img">
                    <img src={pokemonImage} alt={pokemon?.name} title={pokemon?.name}/>
                </div>
            </header>
            <button className='PokemonScreen__BtnBack' onClick={e => navigate(location)}><i className="fa-solid fa-arrow-left"></i></button>
            <main className="PokemonScreen__main">
                <nav className='PokemonScreen__Nav'>
                    <ul className="PokemonScreen__NavList">
                        <li className="PokemonScreen__NavItem">
                            <NavLink
                                to='info'
                                state={{ pokemon, pokemonImage, typeClass, location }}
                                className={({isActive})=> isActive ? 'PokemonScreen__NavItem--active' : undefined}
                            >Información</NavLink>
                        </li>
                        <li className="PokemonScreen__NavItem">
                            <NavLink
                                to='stats'
                                state={{ pokemon, pokemonImage, typeClass, location }}
                                className={({ isActive }) => isActive ? 'PokemonScreen__NavItem--active' : undefined}
                            >Estadisticas</NavLink>
                        </li>
                        <li className="PokemonScreen__NavItem">
                            <NavLink
                                to='evolution'
                                state={{ pokemon, pokemonImage, typeClass, location }}
                                className={({ isActive }) => isActive ? 'PokemonScreen__NavItem--active' : undefined}
                            >Evolución</NavLink>
                        </li>
                    </ul>
                </nav>
                <section className='PokemonScreen__main__section'>
                    <Outlet context={{pokemon, evolutions}}/>
                </section>
            </main>
        </section>
    )
}

export default PokemonScreen;