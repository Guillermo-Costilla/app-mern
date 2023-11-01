import '../styles/itinerary.css'

function Itinerary({ user, duration, price, likes, hashtags }) {

    const money = Array.from({ length: price });


    return (
        <div className="flex flex-col justify-center items-center w-full card mb-5 ">

            <h2 className='w-full text-2xl text-center my-3 font-bold'>Fun day in the City</h2>

            <div className='flex flex-col lg:flex-1 w-full'>

                <div className="flex lg:flex-col w-2/6 items-center jusfity-center lg:items-end sm:max-lg:ml-2 w-full">
                    <img className="h-[75px] w-[75px] lg:h-[150px] lg:w-[150px] ml-3 rounded-full mb-1 object-cover" src={user.photo} alt={user.name} />
                    <p className=" text-xl font-bold mb-4 ml-7 mb-3">{user.name}</p>
                </div>

                <div className='flex flex-col items-center w-full mt-1 sm:max-lg:text-center lg:mt-8'>
                    <p className='text-2xl my-5 font-semibold'>Duration: {duration}hs</p>
                    <p className='flex text-2xl text-amber-400 sm:max-lg:justify-center font-semibold'>Price:
                        {money.map((_, index) => (
                            <span key={index}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-500 ml-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </span>
                        ))}
                    </p>
                </div>

                <div className='w-full justify-center items-center mt-1 sm:max-xl:text-center lg:mt-8'>
                    <p className='flex text-2xl my-5 justify-center font-semibold text-center'>Likes: {likes}<svg xmlns="http://www.w3.org/2000/svg" className=" icon icon-tabler icon-tabler-heart ml-1 mt-1" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg></p>
                    <p className='text-orange-400 mx-auto w-full text-center md:text-xl my-5 '>{hashtags}</p>
                </div>

            </div>
        </div>)

}

export default Itinerary;