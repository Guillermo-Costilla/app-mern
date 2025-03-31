import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user_logout } from '../store/actions/userActions.js';
import { Link } from 'react-router-dom';
import defaultImage from '../images/icon/icono-PhotoRoom.png-PhotoRoom.png';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const defaultPhoto = defaultImage;
    const user = useSelector(store => store.userReducer.user);
    const dispatch = useDispatch();

    const Links = [
        { title: 'Home', to: '/', id: 1 },
        { title: 'Cities', to: '/cities', id: 2 },
        { title: 'My Cities', to: '/my-cities', id: 3 },
        { title: user ? 'Log Out' : 'Sign In', to: user ? '/' : '/signin', id: 4 },
    ];

    const handleLogout = async () => {
        try {
            dispatch(user_logout());
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="py-3 lg:py-0 border-b-0 flex items-center bg-blue-700 shadow-2xl w-full">
            {/* Botón Menú Hamburguesa */}
            <button className="ml-4 w-[15%] sm:w-[10%] text-gray-200" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Título */}
            <h2 className="mx-auto text-center text-lg sm:text-2xl md:text-3xl font-bold cursor-pointer text-gray-300">
                My Tinerary
            </h2>

            {/* Información Usuario */}
            <div className="flex items-center justify-end w-[15%] sm:w-[10%]">
                <img
                    className="rounded-full h-10 w-10 sm:h-14 sm:w-14 object-cover"
                    src={user ? user.image : defaultPhoto}
                    alt="User"
                />
            </div>

            {/* Menú Lateral */}
            <div className={`fixed inset-0 bg-gray-600/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setOpen(false)}>
                <div className={`fixed top-0 left-0 w-64 sm:w-80 h-full bg-gray-800 transition-transform duration-300 transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-4">
                        {/* Botón Cerrar Menú */}
                        <button className="text-gray-200" onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                        {/* Enlaces del Menú */}
                        <nav className="mt-6">
                            {Links.map(link => (
                                link.title !== 'Log Out' ? (
                                    <Link key={link.id} to={link.to} className="block px-4 py-3 rounded-lg text-gray-200 font-semibold text-lg hover:bg-blue-950 transition transform hover:scale-105">
                                        {link.title}
                                    </Link>
                                ) : user && (
                                    <button key={4} onClick={handleLogout} className="w-full text-left px-4 py-3 rounded-lg text-gray-200 font-semibold text-lg hover:bg-blue-950 transition transform hover:scale-105">
                                        <Link to="/">{'Log Out'}</Link>
                                    </button>
                                )
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
