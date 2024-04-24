/* eslint-disable @typescript-eslint/ban-ts-comment */
// https://jsonplaceholder.typicode.com/users
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collapse: false
}
//@ts-ignore

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {}
});

export default homeSlice.reducer;
