import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user_logout } from '../store/actions/userActions.js'; // Importa la acción user_logout desde userActions.js
import { Link } from 'react-router-dom';
import defaultImage from '../images/icon/icono-PhotoRoom.png-PhotoRoom.png';

const SideBar = () => {
    const [open, setOpen] = useState(false); // Estado para controlar si el menú lateral está abierto o cerrado
    const defaultPhoto = defaultImage; // Imagen por defecto
    const defaultName = null; // Nombre por defecto

    // Obtiene el estado del usuario desde Redux
    const user = useSelector(store => store.userReducer.user);

    // Definición de los enlaces del menú lateral
    const Links = [
        { title: 'Home', to: '/', id: 1 },
        { title: 'Cities', to: '/cities', id: 2 },
        { title: user ? 'Log Out' : 'Sign In', to: user ? '/' : '/signin', id: 3 },
    ];

    const logout = { title: user ? 'Log Out' : null, to: '/', id: 4 };

    const dispatch = useDispatch(); // Función para despachar acciones a Redux

    // Función para manejar el logout
    const handleLogout = async () => {
        try {
            dispatch(user_logout()); // Despacha la acción de logout
            setOpen(false); // Cierra el menú lateral después de cerrar sesión
        } catch (error) {
            console.error(error); // Manejo de errores
        }
    };

    return (
        <div className='py-3 border-b-0 flex items-center bg-gray-900 shadow-2xl'>
            {/* Botón para abrir el menú lateral */}
            <button className='ml-6 md:mt-5 w-[20%]' onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            {/* Título del menú */}
            <h2 className='mx-auto text-center py-0 text-xl md:text-4xl font-bold h-6 w-[60%] cursor-pointer'>My Tinerary</h2>

            {/* Información del usuario */}
            <div className='md:flex md:items-center px-7 w-[20%]'>
                <img
                    className='rounded-full h-[50px] w-[50px] md:h-[90px] md:w-[90px] mx-auto md:ml-0 xl:ml-10 object-cover' src={user ? user.image : defaultPhoto}
                    alt="default photo"
                />
                <p className='md:max-lg:max-w-[30px] md:max-lg:pr-4 md:text-xl md:ml-1 font-semibold text-center items-center md:mr-10'>{user ? user.name : defaultName}</p>
            </div>

            {/* Menú lateral */}
            <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen xl:w-[20%] fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}>
                <div className={`${open ? 'w-80' : 'w-0'} min-h-screen w-80 fixed top-0 left-0 transition-all duration-300`}>
                    <div className={`${!open && 'hidden'} pt-3`}>
                        {/* Botón para cerrar el menú lateral */}
                        <button className='ml-4 md:mt-10' onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        {/* Renderiza los enlaces del menú lateral */}
                        {Links.map((link) => (
                            link.title !== 'Log Out' &&
                            <Link className='bg-inherit w-full justify-center hover:bg-blue-950 flex flex-cols font-bold text-xl m-4 p-2 rounded-lg' key={link.id} to={link.to}>{link.title}</Link>
                        ))}
                        {/* Botón para logout */}
                        {user && <button onClick={handleLogout} className={`bg-inherit w-full justify-center hover:bg-blue-950 flex flex-cols font-bold text-xl m-4 p-2 rounded-lg`}><Link to={logout.to} id={logout.id}>{logout.title}</Link></button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
