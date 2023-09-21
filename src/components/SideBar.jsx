import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_logout } from '../store/actions/userActions.js'
import { Link } from 'react-router-dom'
import defaultImage from '../images/icon/icono-PhotoRoom.png-PhotoRoom.png'



const SideBar = () => {
    const [open, setOpen] = useState(false)
    const defaultPhoto = defaultImage
    const defaultName = null

    const user = useSelector(store => store.userReducer.user);

    const Links = [
        { title: user ? null : 'Sign In', to: '/signin', id: 3 },
        { title: 'Home', to: '/', id: 1 },
        { title: 'Cities', to: '/cities', id: 2 },
    ]

    const logout = { title: user ? 'Log Out' : null, to: '/', id: 4 }

    const dispatch = useDispatch();


    const handleLogout = async () => {
        try {
            dispatch(user_logout());

        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className='py-3 border-b-0 flex items-center'>
            <button className='ml-4' onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <h2 className='mx-auto text-center py-0 text-4xl font-bold h-6 text-white cursor-pointer'>My Tinerary</h2>

            <div className='flex items-center'>
                <img
                    className='rounded-full h-[100px] w-[100px] mr-1 object-cover'
                    src={user ? user.image : defaultPhoto}
                    alt="default photo"
                />
                <p className='text-xl font-semibold text-white text-center items-center mr-10'>{user ? user.name : defaultName}</p>
            </div>

            <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}>
                <div className={`${open ? 'w-80' : 'w-0'} min-h-screen w-80 fixed top-0 left-0 transition-all duration-300`}>
                    <div className={`${!open && 'hidden'} pt-3`}>
                        <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        {Links.map((link) => <Link className='w-full justify-center hover:bg-blue-950 flex flex-cols font-bold text-white text-xl m-4 p-2 rounded-lg' key={link.id} to={link.to}>{link.title}</Link>)}
                        <button onClick={handleLogout} className='w-full justify-center hover:bg-blue-950 flex flex-cols font-bold text-white text-xl m-4 p-2 rounded-lg' ><Link to={logout.to} id={logout.id} >{logout.title}</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;