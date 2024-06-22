import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const evolutionTriggersSlice = createSlice({
    name: "evolutionTriggers",
    initialState: [],
    reducers: {
        setGlobalEvolutionTriggers: (state, action) => action.payload,
    }
});

export const getEvolutionTriggers = () => async dispatch => {
    const evolutionTriggers = await axios.get("https://pokeapi.co/api/v2/evolution-trigger/").then(res => res.data.results.map(trigger => trigger.name));

    return dispatch(setGlobalEvolutionTriggers(evolutionTriggers));
}

export const { setGlobalEvolutionTriggers } = evolutionTriggersSlice.actions;

export default evolutionTriggersSlice.reducer;