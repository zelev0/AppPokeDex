import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const typesPokemonsSlice = createSlice({
    name: 'typesPokemons',
    initialState: [],
    reducers: {
        setGlobalTypesPokemons: (store, action) => action.payload
    }
});

export const getTypes = () => async dispatch => {
    try {
        const types = await axios.get('https://pokeapi.co/api/v2/type/').then(res => res.data.results);
        types.unshift({
            name: 'Todos',
            url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
        });
        types.forEach(el => el.name = el.name.replace(el.name[0], el.name[0].toUpperCase()));
        return dispatch(setGlobalTypesPokemons(types));
    } catch (error) {
        console.log(error)
    }
}

export const { setGlobalTypesPokemons } = typesPokemonsSlice.actions;

export default typesPokemonsSlice.reducer;