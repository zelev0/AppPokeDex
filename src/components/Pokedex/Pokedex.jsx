import React, { useEffect, useRef, useState } from 'react';
import { usePagination } from '../../hooks/usePagination';
import Pagination from '../Pagination/Pagination';
import PokemonCard from '../PokemonCard/PokemonCard';
import Pokeball from '../visualComponents/Pokeball';
import FormsPokedex from './FormsPokedex';
import './Pokedex.css';
import '../PokemonCard/PokemonCard.css'

const Pokedex = ({ userName }) => {
    const [viewForms, setViewForms] = useState();
    const [viewType, setViewType] = useState();
    const [viewSearch, setViewSearch] = useState();
    const [search, setSearch] = useState();
    const $forms = useRef();
    const handlerViewForms = () => {
        if (viewForms) {
            $forms.current.classList.remove('Pokedex__forms--active');
            return setTimeout(setViewForms, 300, false)
        }
        return setViewForms(true);
    }

    const { currentPage, setCurrentPage, viewPokemons, quantityPages, pages, currentBlock, setCurrentBlock, pagesPerBlock } = usePagination();

    return (
        <section className="Pokedex">
            <h1 className='Pokedex__title'>
                <div className="Pokedex__title__decoration Pokedex__title__decoration--right-top"></div>
                <div className="Pokedex__title__decoration Pokedex__title__decoration--left-bottom"></div>
                Pokedex
            </h1>
            <p className='Pokedex__message'>Bienvenido <span>{userName}</span>, aqui puedes encontrar tu pokemon favorito.</p>
            <Pokeball />
            {/* {search && <p>Resultados para búsqueda de "{search}"</p>} */}
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                quantityPages={quantityPages}
                pages={pages}
                currentBlock={currentBlock}
                setCurrentBlock={setCurrentBlock}
                pagesPerBlock={pagesPerBlock}
            />
            <section className='Pokedex__container'>
                {viewPokemons?.map(pokemon => (<PokemonCard
                    key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                />))}
            </section>
            {viewForms && <FormsPokedex
                viewSearch={viewSearch}
                setViewSearch={setViewSearch}
                viewType={viewType}
                setViewType={setViewType}
                $forms={$forms}
                setSearch={setSearch}
                setViewForms={setViewForms}
                setCurrentPage={setCurrentPage} />}
            {!(viewSearch || viewType) && <button className="Pokedex__filtro" onClick={e => handlerViewForms()}>
                <i className={viewForms ? "fa-solid fa-xmark" : "fa-solid fa-sliders"}></i>
            </button>}
        </section>
    )
}

export default Pokedex