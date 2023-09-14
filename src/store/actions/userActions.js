import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'



export const user_image = createAction('user_image', (obj) => {
    console.log(obj)

    return {
        payload: obj.image
    }
})
export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/auth/signin', obj.data)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))


            Swal.fire({
                title: '¡Success!',
                text: '¡Welcome ' + data.response.user.name+' ! ',
                icon: 'success',
                confirmButtonText: 'Lets Go!'
              })

        return {
            user: data.response.user
        }
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
          })
        return {
            user: null
        }
    }

})
export const user_signup = createAsyncThunk('user_signup', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/auth/signup', obj.data);
        console.log(data)
        const { user, token } = data.response;
        Swal.fire({
            title: '¡Success!',
            text: 'User created! You can now log in!',
            icon: 'success',
            confirmButtonText: 'Lets Go!'
          })

        return { user, token };

        
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
          })
    }

})
export const user_logout = createAsyncThunk('user_logout', async() => {
    try {
        const token = localStorage.getItem('token')
        const config = {headers: {'Authorization': `Bearer ${token}`}}
        const response = await axios.post('http://localhost:5000/api/auth/signout', null, config);
        localStorage.removeItem('token');
        localStorage.removeItem('user');


        return {
            token: null,
            user: null
        }
    } catch (error) {
        console.log(error)
        throw error;
    }

})
export const google_login = createAsyncThunk('google_login', async (data) => {
    try {
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))
            Swal.fire({
                title: 'Success!',
                text: 'Welcome ' + data.response.user.name,
                icon: 'success',
                confirmButtonText: 'Lets Go!'
              })

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
          })
        return {
            user: null
        }
    }

})


export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})