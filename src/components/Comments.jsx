import '../styles/itinerary.css'
import PropTypes from 'prop-types'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'

function Comments({ comments }) {
    console.log(comments)

    return (
        <div className='card mt-2 mb-5 w-full bg-gray-800 rounded-lg shadow-lg'>
            <Disclosure>
                {
                    ({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className='w-full text-center text-2xl'>Comments</span>
                                {open ? (
                                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="w-full px-4 pt-4 pb-2 text-sm text-slate-300 transition duration-300">
                                <div className='w-full flex flex-col'>
                                    <div className='w-full flex mb-4 rounded-lg px-2'>
                                        <p className='flex lg:ml-10 text-white text-xl'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        </span>{comments[0]}</p>
                                    </div>
                                    <div className='w-full flex items-center mb-4 rounded-lg px-2'>
                                        <p className='flex lg:ml-10 text-white text-xl'><span className='mr-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                            </svg>
                                        </span>{comments[1]}</p>
                                    </div>
                                    <div className='w-full flex mb-10 rounded-lg px-2'>
                                        <p className='flex lg:ml-9 w-full text-white text-xl'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        </span>{comments[2]}</p>
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
    Comments.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.string).isRequired
    }
}


export default Comments


