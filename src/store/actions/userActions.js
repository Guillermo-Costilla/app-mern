import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import apiUrl from "../../api";



export const user_image = createAction('user_image', (obj) => {
    console.log(obj)

    return {
        payload: obj.image
    }
})
export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await apiUrl.post('auth/signin', obj.data)
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        Swal.fire({
            title: '¡Success!',
            text: '¡Welcome ' + data.response.user.name + ' ! ',
            icon: 'success',
            confirmButtonText: 'Lets Go!'
        })

        return {
            user: data.response.user,
            userId: data.response.userId,
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
export const user_signup = createAsyncThunk('user_signup', async (obj) => {
    try {
        const { data } = await apiUrl.post('auth/signup', obj.data);
        console.log(data)
        Swal.fire({
            title: '¡Success!',
            text: data.message + ' You can now log in!',
            icon: 'success',
            confirmButtonText: 'Lets Go!'
          })
        const { user, token } = data.response;
        

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
        const user = JSON.parse(localStorage.getItem('user'))
        
        if (!token) {
            // Si no hay token, simplemente limpiamos el localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                token: null,
                user: null
            }
        }
        
        const config = {headers: {'Authorization': `Bearer ${token}`}}
        // Incluir datos del usuario en el cuerpo de la petición
        const userData = { email: user.email }
        
        const response = await apiUrl.post('auth/signout', userData, config);
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            token: null,
            user: null
        }
    } catch (error) {
        console.log(error)
        // Aún si hay error, limpiamos el localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        return {
            token: null,
            user: null
        }
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