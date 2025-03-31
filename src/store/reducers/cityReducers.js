import { createReducer } from "@reduxjs/toolkit";
import { filter_cities, get_cities} from "../actions/cityActions.js";

const initialState = {
    cities: [],
    userCities: []
}

const cityReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(get_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(filter_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
});

export default cityReducer;
