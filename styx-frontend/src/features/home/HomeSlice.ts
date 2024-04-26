/* eslint-disable @typescript-eslint/ban-ts-comment */
// https://jsonplaceholder.typicode.com/users
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collapse: true
}
//@ts-ignore

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        swapCollapse: (state) => {
            state.collapse = !state.collapse
        }
    }
});

export const { swapCollapse } = homeSlice.actions;
export default homeSlice.reducer;
