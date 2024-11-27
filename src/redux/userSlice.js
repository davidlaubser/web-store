import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    username: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        },
        login: (state, action) => {
            state.username = action.payload;
        },
        logout: (state) => {
            state.username = '';
        },
    },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;