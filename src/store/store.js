import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducers.js';

export const store = configureStore({
    reducer: {
        cityReducer: cityReducer
    }
})