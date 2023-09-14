import '../styles/itinerary.css'

function Activity({ activity, activity2, activity3 }) {

    return (
        <div className='flex flex-col card w-full' >
            <h2 className='w-full text-white text-2xl text-center my-3 text-center font-bold'>Activities:</h2>
            <div className='flex justify-evenly mb-4' >
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <img className='w-[200px] h-[200px] rounded-lg object-cover' src={activity.photo} alt={activity.name} />
                    <p className='text-white text-xl font-semibold text-center'>{activity.name}</p>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <img className='w-[200px] h-[200px] rounded-lg object-cover' src={activity2.photo} alt={activity2.name} />
                    <p className='text-white text-xl font-semibold text-center'>{activity2.name}</p>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <img className='w-[200px] h-[200px] rounded-lg object-cover' src={activity3.photo} alt={activity3.name} />
                    <p className='text-white text-xl font-semibold text-center'>{activity3.name}</p>
                </div>
            </div>
        </div>
    )

}

export default Activity