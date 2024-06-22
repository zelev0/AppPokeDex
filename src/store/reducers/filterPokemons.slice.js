import { createSlice } from "@reduxjs/toolkit";

const filterPokemonSlice = createSlice({
    name: "filterPokemon",
    initialState: null,
    reducers: {
        setGlobalFilterPokemon: (state, action) => action.payload,
    }
});

export const { setGlobalFilterPokemon } = filterPokemonSlice.actions;

export default filterPokemonSlice.reducer;