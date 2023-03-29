import { createSlice } from "@reduxjs/toolkit";
const initialState: { userLogin: string } = {
    userLogin: ''
}
const loginSlice = createSlice({
    initialState,
    name: "login",
    reducers: {
        login: (state, data) => {
            state.userLogin = data.payload;
        },
        logout: (state) => {
            state.userLogin = initialState.userLogin;
        }
    }
});
