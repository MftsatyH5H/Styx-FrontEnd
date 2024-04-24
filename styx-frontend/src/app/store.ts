import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from '../features/authentication/currentUser'
import HomeSlice from "../features/home/HomeSlice";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        user: currentUserSlice,
        home: HomeSlice,
        users: usersSlice
    }
})
export default store