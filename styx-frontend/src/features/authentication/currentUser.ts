/* eslint-disable @typescript-eslint/ban-ts-comment */
// https://jsonplaceholder.typicode.com/users
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import currentUser from "../../api/currentUser.api";

function parseJwt (token:string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const initialState = {
    loading: false,
    iss: '',
    aud: '',
    userType: 0,
    jwt: '',
    error: ''
}
//@ts-ignore
export const login = createAsyncThunk('currentUser/login', async ({username,password}) => {
    const user = new currentUser()
    try {
        const response = await user.login(username,password)
        return response.data
    } catch (error) {
        //@ts-ignore
        throw new Error('Error fetching users: ' + error.message);
    }
});

const currentUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.loading = true;
            state.iss = '';
            state.aud = '';
            state.jwt = '';
            state.userType = 0;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            const properties = parseJwt(action.payload)
            state.loading = false;
            //@ts-ignore
            state.iss = properties.iss;
            state.aud = properties.aud;
            state.userType = properties.userType;
            state.jwt = action.payload;
            state.error = '';
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.iss = '';
            state.aud = '';
            state.jwt = '';
            state.userType = 0;
            //@ts-ignore
            state.error = action.error.message;
        });
    },
});

export default currentUserSlice.reducer;
