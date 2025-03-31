

export default function Card({ city, image, country }) {
    return (
        <div className="flex mx-auto">
            <div className="w-[350px] md:w-[400px] h-[500px] rounded-lg bg-cover bg-center shadow-2xl m-[30px] hover:-translate-y-1 hover:scale-110 duration-300" style={{ backgroundImage: `url(${image})` }}>
                <div className="w-full h-full flex flex-col items-center justify-end opacity-100">
                    <span className="w-full bg-black bg-opacity-50 opacity-100">
                        <h2 className="text-3xl font-bold text-gray-200">{city}</h2>
                        <h3 className="text-xl text-gray-200">{country}</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}









