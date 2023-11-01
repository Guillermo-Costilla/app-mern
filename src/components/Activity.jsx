import '../styles/itinerary.css'

function Activity({ activity, activity2, activity3 }) {

    return (
        <div className='flex flex-col card w-full' >
            <h2 className='w-full text-2xl text-center my-3 text-center font-bold'>Activities:</h2>
            <div className='flex flex-col justify-evenly mb-4' >
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
        </div>
    )

}

export default Activity