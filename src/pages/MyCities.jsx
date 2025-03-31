import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_cities } from '../store/actions/cityActions';
import { user_token } from '../store/actions/userActions';
import Card from '../components/Card.jsx';

const MyCities = () => {
    const dispatch = useDispatch();
    const { cities, user, userId, loading, error } = useSelector((store) => ({
        cities: store.cityReducer.cities,
        user: store.userReducer.user,
        userId: store.userReducer.userId,
        loading: store.cityReducer.loading,
        error: store.cityReducer.error,
    }));

    useEffect(() => {
        // Verificar si hay un usuario en localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser && !user) {
            // Si hay un usuario en localStorage pero no en el estado, lo cargamos
            dispatch(user_token(JSON.parse(storedUser)));
        }

        dispatch(get_cities());
    }, [dispatch, user]);

    // Filtrar las ciudades donde el creator coincide con el ID del usuario
    const userCities = cities.filter(city => city.creator === userId);
    console.log('Este es el usuario:', user)
    console.log('Esta son las ciudades:', cities)
    console.log('Este es el user ID:', userId)

    if (loading) return <div>Loading cities...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='w-full flex grow flex-col min-h-screen'>
            <section className='my-10 w-full'>
                <h2 className='text-4xl my-4 text-center font-bold text-slate-200'>Mis Ciudades</h2>
                <p className='text-2xl my-4 text-center text-slate-200'>Aquí están las ciudades que has creado</p>
            </section>
            <div className='flex flex-1 flex-wrap mx-auto items-center justify-center text-center w-[90%] md:w-1/2'>
                {
                    userCities?.length > 0
                        ? userCities.map((city) => (
                            <Card
                                key={city._id}
                                city={city.city}
                                country={city.country}
                                image={city.image}
                            />
                        )) : <h2 className='text-2xl font-bold text-center'>Aún no has creado ninguna ciudad</h2>
                }
            </div>
        </div>
    );
}

export default MyCities; 