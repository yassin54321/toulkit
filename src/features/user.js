import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
    name: 'todos',
    initialState: [
        { id: 0, action: "Going for a walk with my girlfriend", stat: false },
        { id: 1, action: "Buy groceries for next week", stat: false },
        { id: 2, action: "Renew car insurance", stat: false },
        { id: 3, action: "Sign up for online course", stat: false },
        { id: 4, action: "Internet, water, light and gas expenses", stat: false },
        { id: 5, action: "Visit relatives", stat: false },
        { id: 6, action: "Buy new clothes", stat: false }],
    reducers: {
        handleAdd: (state, action) => {
            state.push(action.payload)
        },
        handleDelete: (state, action) => {
            const state1 = state
            return state1.filter(el => el.id !== action.payload)
        },
        handleFinish: (state, action) => {
            return state.map(el => el.id === action.payload ? { ...el, stat: !el.stat } : el);
        }
    }
}
);
export const handleAdd = user.actions.handleAdd
export const handleDelete = user.actions.handleDelete
export const handleFinish = user.actions.handleFinish

export default user.reducer;