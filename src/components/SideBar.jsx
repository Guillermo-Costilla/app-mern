import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const [open, setOpen] = useState(false)

    const Links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' }
    ]

    return (
        <div className='pt-8 py-3 top-0 left-0 right-0 border-b-0 flex z-10'>
            <button className='ml-4' onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <h2 className='mx-auto text-center py-0 text-4xl font-bold h-6 text-white'>My Tinerary</h2>
            <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}>
                <div className={`${open ? 'w-80' : 'w-0'} min-h-screen w-80 fixed top-0 left-0 transition-all duration-300`}>
                    <div className={`${!open && 'hidden'} pt-3`}>
                        <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <div className='text-center text-white text-xl hover:bg-blue-950 cursor-pointer p-2 mb-2 rounded-lg ml-4'>
                            <button className="font-bold text-gray-50 text-lg rounded-lg inline-block w-[140px] h-[64px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-[21px] h-[20px] inline-block mr-[5px]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Login
                            </button>
                        </div>
                        {Links.map((link) => <Link className='w-full justify-center hover:bg-blue-950 flex flex-cols font-bold text-white text-xl m-4 p-2 rounded-lg' key={link.title} to={link.to}>{link.title}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;