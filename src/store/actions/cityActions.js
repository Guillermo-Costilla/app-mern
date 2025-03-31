import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../api";

export const get_cities = createAsyncThunk('get_cities', async() => {
    try {
       const response = await apiUrl.get('cities');
       
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener ciudades');
    }
})


export const filter_cities = createAsyncThunk('filter_cities', async(obj) => {
    try {
       const response = await apiUrl.get(`cities?city=${obj.name}`);

        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
        return {
            cities: []
        }
    }
})

export const create_city = createAsyncThunk('create_city', async (cityData) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await apiUrl.post('users/cities', cityData, config);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || 'Error al crear ciudad');
    }
});

/*export const get_user_cities = createAsyncThunk('get_user_cities', async () => {
  try {
    const response = await apiUrl.get('users/me/cities');   return response.data;
        
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al obtener ciudades');
    }
}); */