import Itinerary from './Itinerary.jsx';
import Activity from './Activity.jsx';
import Comments from './Comments.jsx';
import PropTypes from 'prop-types'

export default function CardDetail({ city, image, country, description, itineraries, activities }) {


    return (
        <div className='flex mt-10 flex-col lg:flex-row justify-center items-center w-full'>
            <div className='flex flex-col justify-center w-11/12 md:w-5/6 gap-4 rounded-lg lg:mr-20'>
                <div className='relative h-[600px] sm:max-md:h-[800px] sm:max-md:w-full rounded-3xl w-full'>
                    <img className='w-full h-full rounded-3xl' src={image} alt={`${city}, ${country}`} />
                    <div className='sm:max-md: absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-3xl'>
                        <h2 className='text-2xl  md:max-lg:mt-5  md:text-3xl font-bold lg:mt-40 mb-5 text-center sm:max-xl:mb-4 sm:max-xl:mt-1 text-gray-200'>{city}</h2>
                        <h3 className='text-xl  md:text-2xl mb-5 font-semibold sm:max-lg:mb-1 text-gray-200'>{country}</h3>
                        <h3 className='text-lg  sm:max-lg:ml-2  md:text-xl w-3/4 text-left ml-4 sm:max-lg:ml-10 text-gray-200'>{description}</h3>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center text-gray-200'>
                    <Itinerary {...itineraries} />
                    <Activity {...activities} />
                    <Comments {...itineraries} />
                </div>
            </div>
        </div>
    );
}

CardDetail.propTypes = {
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    itineraries: PropTypes.arrayOf(PropTypes.object).isRequired,
    activities: PropTypes.arrayOf(PropTypes.object).isRequired
}
