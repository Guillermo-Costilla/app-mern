import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Cities = () => {
    const [cities, setCities] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/cities')
            .then(response => {
                setCities(response.data.cities);
                setErrorMessage('');
            })
            .catch(error => console.log(error))
    }, []);

    const handleInputChange = async (text) => {
        const searchText = text.target.value;

        try {
            const response = await axios.get(`http://localhost:5000/api/cities?city=${searchText}`);
            const { success, cities } = response.data;

            if (success) {
                setCities(cities);
                setErrorMessage('');
            } else {
                setCities([]);
                setErrorMessage('No se encontraron ciudades');
            }
        } catch (error) {
            console.log(error);
            setCities([]);
            setErrorMessage('Sorry, the city you are looking for was not found.');
        }
    };

    return (
        <div className='w-full flex flex-col min-h-screen flex-grow'>
            <section className='my-10 w-full'>
                <h2 className='text-4xl my-4 text-white text-center font-bold'>Cities</h2>
                <p className='text-2xl my-4 text-white text-center'>Collection of the most beautiful places and experiences</p>
            </section>
            <div className='w-full flex'>
                <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2 w-1/2 m-auto' type="text" placeholder='Buscar' />
            </div>
            <div className='grid grid-cols-5 gap-2 mt-10 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:max-xl:grid-cols-4 items-center text-center w-full'>
                {errorMessage && <p className="text-white w-full text-xl text-center ml-[45rem] sm:max-md:ml-[10rem] md:max-lg:ml-[15rem] lg:max-xl:ml-[25rem]">{errorMessage}</p>}

                {cities.map((city) => (
                    <Link key={city._id} to={`/cities/${city._id}`}>
                        <Card city={city.city} country={city.country} image={city.image} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Cities;




