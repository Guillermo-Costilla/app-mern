import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { google_login } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const googlesignin = ({ onClick }) => {

    const dispatch = useDispatch()

    const googleButton = useRef()

    const handleCredentialResponse = async (response) => {
        const body = {
            token_id: response.credential
        }
        const { data } = await axios.post('http://localhost:5000/api/auth/google', body)

        dispatch(google_login(data))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "1001595770929-i4rcauj5hoal7p58p2t1pmqkd7j8acn7.apps.googleusercontent.com",
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