import { Link } from 'react-router-dom';
import Itinerary from './Itinerary.jsx';
import Activity from './Activity.jsx';
import Comments from './Comments.jsx';

export default function CardDetail({ city, image, country, description, itineraries, activities }) {
    const Links =
        [{ title: 'Back Cities', to: '/cities', id: '2' }, { title: 'Back Home', to: '/', id: '1' }]
        ;

    return (
        <div className='flex mt-10 flex-col lg:flex-row justify-center items-center w-full'>
            <div className='w-20 relative sm:max-lg:mb-5 mx-auto'>
                <div className='flex flex-row justify-center lg:justify-left lg:flex-col mb-10 w-10'>
                    <Link key={Links[0].id} to={Links[0].to}>
                        <button className='p-2 text-xl font-bold transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-200 boton'>{Links[0].title}</button>
                    </Link>
                    <Link key={Links[1].id} to={Links[1].to}>
                        <button className='lg:mt-4 sm:max-lg:mt-0 ml-4 lg:ml-0  p-2 text-xl font-bold transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-200 boton'>{Links[1].title}</button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-center w-11/12 md:w-5/6 gap-4 rounded-lg lg:mr-20'>
                <div className='relative h-[600px] sm:max-md:h-[800px] sm:max-md:w-full rounded-3xl w-full'>
                    <img className='w-full h-full rounded-3xl' src={image} alt={`${city}, ${country}`} />
                    <div className='sm:max-md: absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-3xl'>
                        <h2 className='text-2xl  md:max-lg:mt-5  md:text-3xl font-bold lg:mt-40 mb-5 text-center sm:max-xl:mb-4 sm:max-xl:mt-1'>{city}</h2>
                        <h3 className='text-xl  md:text-2xl mb-5 font-semibold sm:max-lg:mb-1'>{country}</h3>
                        <h3 className='text-lg  sm:max-lg:ml-2  md:text-xl w-3/4 text-left ml-4 sm:max-lg:ml-10'>{description}</h3>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <Itinerary {...itineraries} />
                    <Activity {...activities} />
                    <Comments {...itineraries} />
                </div>
            </div>
        </div>
    );
}
