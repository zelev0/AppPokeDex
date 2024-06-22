import { useState } from "react"
import { useSelector } from "react-redux";

export const usePagination = () => {
    const pokemons = useSelector(store => store.viewPokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentBlock, setCurrentBlock] = useState(1);
    
    let viewPokemons;
    const pokemonPerPage = 20;
    if (pokemons.length <= pokemonPerPage) {
        viewPokemons = JSON.parse(JSON.stringify(pokemons));
    } else {
        const lastPokemon = currentPage * pokemonPerPage;
        viewPokemons = JSON.parse(JSON.stringify(pokemons.slice(lastPokemon - pokemonPerPage, lastPokemon)));
    }
    
    let pages = [];
    const pagesPerBlock = 5;
    let quantityPages = Math.ceil(pokemons.length / pokemonPerPage);

    if (currentBlock * pagesPerBlock >= quantityPages) {
        for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) pages.push(i);
    } else {
        for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) pages.push(i);
    }

    return {
        currentPage,
        setCurrentPage,
        viewPokemons,
        quantityPages,
        pages,
        currentBlock,
        setCurrentBlock,
        pagesPerBlock
    }
}