import { useDispatch, useSelector } from "react-redux";
import { google_login, user_login } from '../store/actions/userActions.js'
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/itinerary.css'
import Googlesignin from "../components/googlesignin.jsx";
import passaport from '../images/icon/pngwing.com.png'


export const SignIn = () => {

    const links = { title: 'Back', to: '/', id: 1 }

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSignIn = async (event) => {
        event.preventDefault()
        try {
            dispatch(user_login({
                data: formData
            }))

        } catch (error) {
            console.log(error)
        }
    }

    const handleSigInGoogle = async () => {
        try {
            await window.gapi.auth2.getAuthInstance().signIn();
            const id_token = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

            dispatch(google_login({
                token: id_token
            }));
        } catch (error) {
            console.log(error);
        }
    };

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const Links = { title: "Register Now", to: "/signup", id: "7" };

    return (
        <section className="flex flex-col md:flex-row md:flex-1 h-screen items-center min-h-screen w-full">

            <div className="card w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                <div className="w-full h-100">
                    <div className="flex justify-center items-center">
                        <img src={passaport} alt="Passaport" className="w-[400px] h-[200px] mt-10" />
                    </div>

                    <div>
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-white text-left">Log in to your account</h1>
                    </div>
                    <form onSubmit={handleSignIn} className="mt-6" action="">
                        <div>
                            <label className="block text-slate-400" htmlFor='mail'>Email Address</label>
                            <input onChange={handleInput} autoComplete="username" type="email" name="email" id="mail" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-slate-400" htmlFor='pass'>Password</label>
                            <input onChange={handleInput} autoComplete="current-password" type="password" name="password" id="pass" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-slate-400 hover:text-white focus:text-white">Forgot Password?</a>
                        </div>

                        <button onClick={handleSignIn} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 transition duration-300 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />
                    <div className="flex bg-transparent">
                        <Googlesignin onClick={handleSigInGoogle} />
                        <button className='ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' ><Link to={links.to} id={links.id} >{links.title}</Link></button>
                    </div>

                    <p className="my-8 text-slate-400">Need an account? <Link key={Links.id} to={'/signup'} className="text-blue-500 hover:text-blue-700 font-semibold" > Create an
                        account </Link></p>

                </div>
            </div>

        </section>
    )

}

export default SignIn;