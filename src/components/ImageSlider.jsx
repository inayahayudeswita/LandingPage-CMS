import React, { useState } from 'react';
import '../App.css';  
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to control the current image index

  // Array of images
  const images = [image1, image2, image3, image4, image5, image6, image7];

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative flex justify-center items-center py-10">
      {/* Previous Button */}
      <button
        className="absolute left-4 text-white bg-[#0066cc] bg-opacity-75 p-4 rounded-full cursor-pointer text-2xl sm:left-2 sm:text-xl hover:bg-[#004f9f] transition-all duration-300"
        onClick={prevSlide}
      >
        ‹
      </button>

      {/* Slider Container for displaying 3 images */}
      <div className="flex overflow-hidden transition-transform duration-500 ease-in-out">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="relative w-1/3 h-[45vh] mx-2">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg slider-image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-bold p-4">
              <span>Image {index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute right-4 text-white bg-[#0066cc] bg-opacity-75 p-4 rounded-full cursor-pointer text-2xl sm:right-2 sm:text-xl hover:bg-[#004f9f] transition-all duration-300"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
