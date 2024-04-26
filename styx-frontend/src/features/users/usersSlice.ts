/* eslint-disable @typescript-eslint/ban-ts-comment */
// https://jsonplaceholder.typicode.com/users
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersApi from "../../api/users.api";


const initialState = {
    loading: false,
    users: [],
    error: ''
}
//@ts-ignore
export const getUsers = createAsyncThunk('users/getUsers', async ({page, jwt}) => {
    const api = new usersApi();

    try {
        const response = await api.getUsers(page, jwt)
        return response.data
    } catch (error) {
        //@ts-ignore
        throw new Error('Error fetching users: ' + error.message);
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.pending, state => {
            state.loading = false;
            state.users = [];
            state.error = ''
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            //@ts-ignore
            state.users = action.payload
            state.error = '';
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            //@ts-ignore
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;
