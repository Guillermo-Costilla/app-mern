import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { google_login } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'
import apiUrl from '../api'

const googlesignin = ({ onClick }) => {

    const dispatch = useDispatch()

    const googleButton = useRef()

    const handleCredentialResponse = async (response) => {
        const body = {
            token_id: response.credential
        }
        const { data } = await axios.post(`${apiUrl}auth/google`, body)

        dispatch(google_login(data))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT,
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "filled_black", size: "medium", text: 'signin_with' }
            );
        }
    }, [])

    return (
        <div onClick={onClick} ref={googleButton}></div>
    )
}

export default googlesignin