import { configureStore } from '@reduxjs/toolkit';
import user from '../features/user';

const store = configureStore({
    reducer: { todos: user }
});
export default store;