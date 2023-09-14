import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import '../styles/itinerary.css'


const Home = () => {

    const images = [
        '../../public/Austria.jpg',
        '../../public/Canada.jpg',
        '../../public/España.jpg',
        '../../public/EstadosUnidos.jpg',
        '../../public/Francia.jpg',
        '../../public/Islandia.jpg',
        '../../public/Italia.jpg',
        '../../public/Japon.jpeg',
        '../../public/Noruega.jpg',
        '../../public/NuevaZelanda.jpg',
        '../../public/Sudafrica.jpg',
        '../../public/Suiza.jpg'
    ];

    const Links =
        { title: 'View More Cities', to: '/cities', id: '2' }


    return (
        <div className="flex flex-grow sm:max-lg:flex-col sm:max-lg:w-full mb-32">
            <div className="mx-auto w-1/2 sm:max-lg:w-full">
                <h2 className='text-3xl font-bold mt-36 ml-12 w-11/12 text-white'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
                <p className='texl-2xl m-12 w-3/5 text-white'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Link key={Links.id} to={Links.to}><button className='text-white px-4 py-2 text-2xl font-bold ml-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-300 boton z-10'>{Links.title}</button></Link>
            </div>
            <div className="mt-36 mx-auto w-1/2 sm:max-lg:w-full sm:max-lg:mb-40">
                <h3 className="text-white text-2xl font-bold text-center mb-2">Popular Mytineraries</h3>
                <Carousel images={images} />
            </div>
        </div>
    )
}

export default Home;