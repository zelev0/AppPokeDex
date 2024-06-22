import { createSlice } from "@reduxjs/toolkit";
import { setGlobalPokemons } from "./pokemons.slice";
import axios from "axios";

const viewPokemonsSlice = createSlice({
    name: 'viewPokemons',
    initialState: [],
    reducers: {
        setGlobalViewPokemons: (state, action) => action.payload
    }
});

export const getPokemons = (url, firstTime) => async dispatch => {
    try {
        const data = await axios.get(url).then(res => res.data.pokemon ? res.data.pokemon : res.data.results);

        if (firstTime) dispatch(setGlobalPokemons(data));
        return dispatch(setGlobalViewPokemons(data));
    } catch (error) {
        console.log(error)
    }
}

export const { setGlobalViewPokemons } = viewPokemonsSlice.actions;

export default viewPokemonsSlice.reducer;