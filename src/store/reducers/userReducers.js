import { createReducer } from "@reduxjs/toolkit";
import { google_login, user_image, user_signup, user_login, user_logout, user_token } from '../actions/userActions';

const initialState = {
    userId: null,
    user: null,
    token: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_image, (state, action) => {
            return {
                ...state,
                image: action.payload.image
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {

            return {
                ...state,
                userId: action.payload.userId,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_signup.fulfilled, (state, action) => {

           return state
            
        })
        .addCase(user_logout.fulfilled, (state, action) => {

            return initialState;
        })
        .addCase(google_login.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
            }
        })
)

export default userReducer