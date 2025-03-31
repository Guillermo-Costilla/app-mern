import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import '../styles/itinerary.css'
import 'animate.css';
import fondo from '../images/icon/fondo2.0.jpg'




const Home = () => {


    return (
        <div className="lg:flex flex-1 w-full min-h-screen bg-cover bg-no-repeat bg-center pb-10" style={{ backgroundImage: `url(${fondo})`, height: 'max-content' }}>
            <div className="w-full px-3">
                <h2 className='text-3xl font-bold md:max-lg:pt-8 xl:mt-14 mx-auto md:ml-12 w-11/12 text-gray-200'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
                <p className='text-xl md:text-2xl font-semibold mx-auto my-10 md:m-12 w-11/12 text-gray-200  '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Link className="bg-blue-700 hover:bg-blue-500 transition duration-300 p-4 rounded-xl text-xl ml-4 lg:ml-10 animate_animated animate__pulse animate__infinite" to="/cities">View Cities</Link>
            </div>
            <div className="mt-10 xl:mt-14 md:mx-auto flex flex-col md:items-center w-full sm:max-lg:mb-40 z-10 md:max-lg:mt-20">
                <h3 className="text-3xl ml-8 md:ml-0 font-bold md:text-center mb-10 md:mb-2 text-gray-200">Popular Mytineraries</h3>
                <Carousel />
            </div>
        </div>
    )
}

export default Home;
