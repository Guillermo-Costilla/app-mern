import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducers.js';
import userReducer  from './reducers/userReducers.js';

export const store = configureStore({
    reducer: {
        cityReducer,
        userReducer
    }
})

export default store;