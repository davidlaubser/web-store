import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount += action.payload.price;
        },
        removeItem(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                existingItem.quantity -= 1;
            }
            state.totalAmount -= action.payload.price;
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;