import React, { useState } from 'react'

const images = [
    "/Images/Carousel/first.jpg",
    "/Images/Carousel/second.jpg",
    "/Images/Carousel/third.jpg",
    "/Images/Carousel/fourth.jpg",
    "/Images/Carousel/fifth.jpg"
]

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex justify-center items-center my-10 overflow-hidden">
            <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none text-6xl z-50 text-[#83CEF9]">
                {"<"}
            </button>
            <div className="flex justify-center items-center gap-4 relative">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`image-${index}`}
                        className={`w-[700px] h-[500px] rounded-lg bg-red-500 text-white ${index === currentIndex ? 'scale-110 block z-50' : `scale-75 absolute z-20`}`}
                        style={{ left: `${(index - currentIndex) * 500}px` }}
                    />
                ))}
            </div>
            <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none text-6xl z-50 text-[#83CEF9]">
                {">"}
            </button>
        </div>
    );
}

export default Home


