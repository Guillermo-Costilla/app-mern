import { Link } from 'react-router-dom';

export default function CardDetail({ city, image, country, description }) {
    const Links = [
        { title: 'Back Cities', to: '/cities', id: '2' }
    ];

    return (
        <div className='flex flex-col items-center mt-10 h-screen'>
            <div className='w-2/3 sm:w-1/2 h-[600px] rounded-lg shadow-2xl'>
                <div className='relative h-full'>
                    <img className='w-full h-full object-cover' src={image} alt={`${city}, ${country}`} />
                    <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                        <h2 className='text-white text-3xl font-bold mt-40 mb-5 text-center sm:max-md:mt-20'>{city}</h2>
                        <h3 className='text-white text-2xl mb-5'>{country}</h3>
                        <h3 className='text-white text-xl w-3/4 text-left ml-4 sm:max-lg:ml-10'>{description}</h3>
                    </div>
                </div>
                <div className='w-full h-[300px] bg-white flex flex-col justify-center items-center'>
                    <img src="../../public/icon/beam-map-with-route-and-camera-for-travel 1.png" alt="itineraries" />
                    <p className='text-xl font-semibold'>There are no itineraries</p>
                </div>
                <Link className='w-full justify-center font-bold text-white text-center text-xl m-4 p-2 rounded-lg' key={Links[0].id} to={Links[0].to}>
                    {Links[0].title}
                </Link>
            </div>
        </div>
    );
}
