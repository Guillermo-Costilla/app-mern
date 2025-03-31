import { createSlice } from "@reduxjs/toolkit";
import { get_user_cities } from "../actions/cityActions";

const citySlice = createSlice({
    name: 'cities',
    initialState: {
        userCities: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_user_cities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(get_user_cities.fulfilled, (state, action) => {
                state.loading = false;
                state.userCities = action.payload.cities;
            })
            .addCase(get_user_cities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default citySlice.reducer; 