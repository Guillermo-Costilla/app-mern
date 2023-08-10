import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imagesPerSlide = 4;
    const totalSlides = Math.ceil(images.length / imagesPerSlide);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    return (
        <div className="flex w-full h-[400] justify-center transition-all duration-300">
            <button className="transition-all duration-300 p-2 text-base cursor-pointer text-white" onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </button>
            <div className="grid grid-cols-2 gap-2 transition-all duration-300">
                {[...Array(imagesPerSlide)].map((_, index) => {
                    const imageIndex = currentSlide * imagesPerSlide + index;
                    return (
                        <img
                            key={imageIndex}
                            src={images[imageIndex]}
                            alt={`Imagen ${imageIndex}`}
                            className="w-[300px] h-[200px] transition-all duration-300 rounded-lg cursor-pointer"
                        />

                    );
                })}
            </div>
            <button className="transition-all duration-300 p-2 text-base cursor-pointer text-white font-bold" onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </button>
        </div>
    );
};

export default Carousel;