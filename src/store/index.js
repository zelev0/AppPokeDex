import { configureStore } from "@reduxjs/toolkit";
import userName from './reducers/userName';
import pokemons from './reducers/pokemons.slice';
import viewPokemons from './reducers/viewPokemons.slice';
import typesPokemons from './reducers/typesPokemons.slice';
import filterPokemons from './reducers/filterPokemons.slice';
import evolutionTriggers from './reducers/evolutionTriggers.slice';

export default configureStore({
    reducer: {
        userName,
        pokemons,
        viewPokemons,
        typesPokemons,
        filterPokemons,
        evolutionTriggers,
    }
})