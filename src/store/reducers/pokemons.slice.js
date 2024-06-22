import { createSlice } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setGlobalPokemons: (store, action) => action.payload
    }
});

export const { setGlobalPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;