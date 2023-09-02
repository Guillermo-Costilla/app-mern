import { Link } from 'react-router-dom';
import Itinerary from './Itinerary.jsx';
import Activity from './Activity.jsx';

export default function CardDetail({ city, image, country, description, itineraries }) {
    const Links =
        [{ title: 'Back Cities', to: '/cities', id: '2' }, { title: 'Back Home', to: '/', id: '1' }]
        ;

    return (
        <div className='flex flex-wrap mt-10 ml-5'>
            <div className='flex flex-1 w-1/2 sm:w-1/2 h-[600px] gap-4 rounded-lg shadow-2xl sm:max-xl:w-4/5 '>
                <div className='relative h-full rounded-3xl'>
                    <img className='w-full h-full rounded-3xl' src={image} alt={`${city}, ${country}`} />
                    <div className='sm:max-md: absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-3xl'>
                        <h2 className='sm:max-md:text-xl  md:max-lg:mt-5 text-white text-3xl font-bold mt-40 mb-5 text-center sm:max-xl:mb-4 sm:max-xl:mt-1'>{city}</h2>
                        <h3 className='sm:max-md:text-xl  text-white text-2xl mb-5 font-semibold sm:max-lg:mb-1'>{country}</h3>
                        <h3 className='sm:max-md:text-lg  sm:max-lg:ml-2 text-white text-xl w-3/4 text-left ml-4 sm:max-lg:ml-10'>{description}</h3>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <Itinerary {...itineraries} />
                    <Activity {...itineraries} />
                </div>
            </div>
            <div className='mt-5 mb-5 flex w-full justify-center'>
                <Link key={Links[0].id} to={Links[0].to}>
                    <button className='text-white p-2 text-2xl font-bold transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-200 boton'>{Links[0].title}</button>
                </Link>
                <Link key={Links[1].id} to={Links[1].to}>
                    <button className='ml-10 text-white p-2 text-2xl font-bold transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-200 boton'>{Links[1].title}</button>
                </Link>
            </div>
        </div>
    );
}
