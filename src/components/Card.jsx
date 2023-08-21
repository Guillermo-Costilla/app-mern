

export default function Card({ city, image, country }) {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-[400px] h-[500px] rounded-lg bg-cover shadow-2xl m-[30px] hover:-translate-y-1 hover:scale-110 duration-300" style={{ backgroundImage: `url(${image})` }}>
                <div className="w-full h-full flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition-opacity">
                    <span className="w-full bg-black bg-opacity-50 opacity-100 hover:opacity-0 transition-opacity">
                        <h2 className="text-white text-3xl font-bold">{city}</h2>
                        <h3 className="text-white text-xl">{country}</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}









