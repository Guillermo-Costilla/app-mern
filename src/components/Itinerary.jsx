import '../styles/itinerary.css'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

function Itinerary({ user, duration, price, likes, hashtags }) {
    return (
        <div className="flex flex-col justify-center items-center w-full card mb-5 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className='w-full text-2xl text-center my-3 font-bold text-gray-200'>Fun day in the City</h2>

            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='w-full text-center text-2xl'>Details</span>
                            {open ? (
                                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                            ) : (
                                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                            )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="w-full px-4 pt-4 pb-2 text-sm text-slate-300 transition duration-300">
                            <div className='flex flex-col lg:flex-row lg:flex-1 w-full transition duration-300'>
                                <div className="flex lg:flex-col lg:justify-center items-center w-full lg:w-1/3 sm:max-lg:ml-2 gap-4">
                                    <img className="h-[75px] w-[75px] lg:h-[150px] lg:w-[150px] items-center md:ml-3 rounded-full mb-1 object-cover" src={user.photo} alt={user.name} />
                                    <p className="text-xl font-bold mb-4 text-center">{user.name}</p>
                                </div>

                                <div className='flex flex-col w-full lg:w-1/3 mt-1 lg:mt-8'>
                                    <p className='text-2xl my-5 font-semibold'>Duration: {duration}hs</p>
                                    <p className='flex text-2xl font-semibold'>Price: <span className='text-2xl text-amber-400'>{price} U$D</span></p>
                                </div>

                                <div className='w-1/3 flex flex-col mt-1 lg:mt-8'>
                                    <p className='flex text-2xl my-5 font-semibold text-center'>Likes: {likes}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart ml-1 mt-1" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                    </p>
                                    <p className='text-slate-300 mx-auto w-full md:text-xl my-5 text-2xl'>Hashtags:</p>
                                    <p className='text-orange-400 mx-auto w-full md:text-xl my-1 text-2xl'>{hashtags}</p>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

{
    Itinerary.propTypes = {
        user: PropTypes.shape({
            photo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        hashtags: PropTypes.string.isRequired
    }
}

export default Itinerary;