import { useState, useEffect } from 'react';
import austria from '../images/Austria.jpg'
import canada from '../images/Canada.jpg'
import españa from '../images/España.jpg'
import eeuu from '../images/EstadosUnidos.jpg'
import francia from '../images/Francia.jpg'
import islandia from '../images/Islandia.jpg'
import italia from '../images/Italia.jpg'
import japon from '../images/Japon.jpeg'
import noruega from '../images/Noruega.jpg'
import nuevaZelanda from '../images/NuevaZelanda.jpg'
import sudafrica from '../images/Sudafrica.jpg'
import suiza from '../images/Suiza.jpg'

const images = [
    { src: austria, id: 1, title: 'Austria' },
    { src: canada, id: 2, title: 'Canada' },
    { src: españa, id: 3, title: 'España' },
    { src: eeuu, id: 4, title: 'EEUU' },
    { src: francia, id: 5, title: 'Francia' },
    { src: islandia, id: 6, title: 'Islandia' },
    { src: italia, id: 7, title: 'Italia' },
    { src: japon, id: 8, title: 'Japon' },
    { src: noruega, id: 9, title: 'Noruega' },
    { src: nuevaZelanda, id: 10, title: 'Nueva Zelanda' },
    { src: sudafrica, id: 11, title: 'Sudafrica' },
    { src: suiza, id: 12, title: 'Suiza' }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
        }, 5000); // valor 5000 (milisegundos)

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex]);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div id="carouselExampleCrossfade" className="relative w-full h-[300px] md:h-auto p-4 md:w-5/6" data-te-carousel-init data-te-ride="carousel">

            <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-te-target="#carouselExampleCrossfade"
                        data-te-slide-to={index}
                        data-te-carousel-active={index === currentIndex}
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>


            <div className="relative w-full  overflow-hidden after:clear-both after:block after:content-['']">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`relative float-left w-full bg-cover bg-center ${index === currentIndex
                            ? ''
                            : '-mr-[100%] bg-cover bg-center !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none'
                            }`}
                        data-te-carousel-fade
                        data-te-carousel-item
                        data-te-carousel-active={index === currentIndex}
                    >
                        <img src={image.src} className="block w-full bg-cover bg-center rounded-xl  h-[300px] md:h-[600px]" alt={image.title} />
                    </div>
                ))}
            </div>


            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide="prev"
                onClick={prevSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>

            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide="next"
                onClick={nextSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
