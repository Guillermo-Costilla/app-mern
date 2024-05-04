import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import '../styles/itinerary.css'
import 'animate.css';




const Home = () => {
    const Links =
        { title: 'View More Cities', to: '/cities', id: '2' }


    return (
        <div className="lg:flex flex-1 w-full min-h-screen bg-cover bg-no-repeat bg-center pb-10" style={{ backgroundImage: "url('https://image.slidesdocs.com/responsive-images/background/promotion-travel-world-airplane-national-day-cartoon-powerpoint-background_b9f8e35981__960_540.jpg')", height: 'max-content' }}>
            <div className="w-full px-3">
                <h2 className='text-3xl font-bold md:max-lg:pt-8 xl:mt-14 mx-auto md:ml-12 w-11/12 text-gray-600'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
                <p className='text-xl md:text-2xl font-semibold mx-auto my-10 md:m-12 w-11/12 text-gray-600  '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Link className="animate_animated animate__pulse animate__infinite" key={Links.id} to={Links.to}><button className='px-4 ml-4 md:ml-12 py-2 text-xl md:text-2xl font-bold mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-300 boton z-10 text-gray-200'>{Links.title}</button></Link>
            </div>
            <div className="mt-4 xl:mt-14 mx-auto flex flex-col items-center w-full sm:max-lg:mb-40 z-10 md:max-lg:mt-20">
                <h3 className="text-3xl font-bold text-left md:text-center mb-10 md:mb-2 text-gray-600">Popular Mytineraries</h3>
                <Carousel />
            </div>
        </div>
    )
}

export default Home;
