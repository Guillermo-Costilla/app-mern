import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import '../styles/itinerary.css'
import 'animate.css';




const Home = () => {
    const Links =
        { title: 'View More Cities', to: '/cities', id: '2' }


    return (
        <div className="md:flex flex-1 w-full">
            <div className="w-full px-3">
                <h2 className='text-3xl font-bold mt-14 mx-auto md:ml-12 w-11/12'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
                <p className='text-xl md:text-2xl font-semibold mx-auto my-10 md:m-12 w-11/12  '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Link className="animate_animated animate__pulse animate__infinite" key={Links.id} to={Links.to}><button className='px-4 ml-4 md:ml-12 py-2 text-xl md:text-2xl font-bold mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-300 boton z-10'>{Links.title}</button></Link>
            </div>
            <div className="mt-14 mx-auto flex flex-col justify-center items-center w-full sm:max-lg:mb-40 z-10">
                <h3 className="text-3xl font-bold text-left md:text-center mb-10 md:mb-2">Popular Mytineraries</h3>
                <Carousel />
            </div>
        </div>
    )
}

export default Home;
