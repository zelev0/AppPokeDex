import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: null,
    reducers: {
        setGlobalUser(state, action) {return action.payload}
    }
})

export const { setGlobalUser } = userNameSlice.actions;

export default userNameSlice.reducer;