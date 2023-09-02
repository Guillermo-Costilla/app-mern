import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filter_cities, get_cities } from '../store/actions/cityActions.js';
import Card from '../components/Card.jsx';

export const Cities = () => {

    const cities = useSelector((store) => store.cityReducer.cities)

    const dispatch = useDispatch();

    let inputSearch = useRef();

    useEffect(() => {
        dispatch(get_cities())
    }, [dispatch]);

    const handleSearch = () => {

        dispatch(filter_cities({
            name: inputSearch.current.value
        }))
    };

    return (
        <div className='w-full flex grow flex-col min-h-screen'>
            <section className='my-10 w-full'>
                <h2 className='text-4xl my-4 text-white text-center font-bold'>Cities</h2>
                <p className='text-2xl my-4 text-white text-center'>Collection of the most beautiful places and experiences</p>
            </section>
            <div className='w-full flex m-auto justify-center'>
                <input name='input_search' ref={inputSearch} className='border-2 border-gray-700 rounded-md py-1 px-2 w-1/2' type="text" placeholder='Search cities' />
                <button onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
            </div>
            <div className='flex flex-1 flex-wrap items-center justify-center text-center w-full'>

                {
                    cities?.length > 0
                        ? cities?.map((city) => (
                            <Link key={city._id} to={`/cities/${city._id}`}>
                                <Card city={city.city} country={city.country} image={city.image} />
                            </Link>
                        )) : <h2 className='text-2xl text-white font-bold text-center'>Sorry, no cities were found</h2>
                }
            </div>
        </div>
    );
}

export default Cities;



