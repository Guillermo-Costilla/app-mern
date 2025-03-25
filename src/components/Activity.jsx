import '../styles/itinerary.css'
import PropTypes from 'prop-types'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'

function Activity({ activity, activity2, activity3 }) {

    return (
        <div className='flex flex-col w-full card bg-gray-800 rounded-lg shadow-lg' >
            <Disclosure>
                {
                    ({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className='w-full text-center text-2xl'>Activities</span>
                                {open ? (
                                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="w-full px-4 pt-4 pb-2 text-sm text-slate-300 transition duration-300">
                                <div className='flex flex-col lg:flex-row justify-evenly mb-4' >
                                    <div className='w-full lg:w-1/3 flex flex-col justify-center items-center'>
                                        <img className='w-[200px] h-[200px] rounded-lg object-cover' src={activity.photo} alt={activity.name} />
                                        <p className='text-xl font-semibold text-center my-2'>{activity.name}</p>
                                    </div>
                                    <div className='w-full lg:w-1/3 flex flex-col justify-center items-center'>
                                        <img className='w-[200px] h-[200px] rounded-lg object-cover' src={activity2.photo} alt={activity2.name} />
                                        <p className='text-xl font-semibold text-center my-2'>{activity2.name}</p>
                                    </div>
                                    <div className='w-full lg:w-1/3 flex flex-col justify-center items-center'>
                                        <img className='w-[200px] h-[200px] rounded-lg object-cover' src={activity3.photo} alt={activity3.name} />
                                        <p className='text-xl font-semibold text-center mb-1'>{activity3.name}</p>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )
                }
            </Disclosure>

        </div>
    )

}

{
    Activity.propTypes = {
        activity: PropTypes.shape({
            photo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        activity2: PropTypes.shape({
            photo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        activity3: PropTypes.shape({
            photo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    }
}

export default Activity


