import '../styles/itinerary.css'
import { useState } from 'react'
import CountryDropdown from '../components/Dropdown.jsx'
import { useDispatch } from 'react-redux'
import { user_signup } from '../store/actions/userActions'
import { Link } from 'react-router-dom';


export const SignUp = () => {

    const links = { title: 'Sign in', to: '/signin', id: 2 }

    const countrys = ["Argentina", "EEUU", "France", "England", "Italy", "Germany", "Colombia", "China", "Brazil"]

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        image: '',
        country: ''
    })

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            dispatch(user_signup({
                data: formData
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <form onSubmit={handleSignUp} className='w-1/2 p-6 card'>
                    <h2 className='text-white font-bold text-3xl w-full text-center'>Sign up</h2>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleInput} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleInput} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleInput} type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name & Lastname</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleInput} type="url" name="image" id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="photo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">URL Photo</label>
                    </div>

                    <div className="mb-5">
                        <h1 className='text-gray-400 mb-1'>Select your country:</h1>
                        <CountryDropdown countrys={countrys} onChange={handleInput} />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <button className='ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' ><Link to={links.to} id={links.id} >{links.title}</Link></button>
                </form>
            </div>
            <div>
            </div>
        </div>


    )
}

export default SignUp;






