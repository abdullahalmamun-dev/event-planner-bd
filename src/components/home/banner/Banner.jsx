import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "4.jpg",
    "banner.jpg",
    "shardayyy-photography-fJzmPe-a0eU-unsplash",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div
      className="slider w-full relative overflow-hidden"
      style={{ height: "75vh" }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`slide absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#003366] bg-opacity-80 p-10 rounded-lg">
          <h2 className="text-3xl text-[#FFD700] text-center font-bold mb-4">
            Plan Your Perfect Event
          </h2>
          <div className="flex justify-center space-x-10">
            <div className="flex flex-col items-center text-white">
              <FaCalendarAlt className="text-4xl mb-4" />
              <span>Event Scheduling</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <FaUsers className="text-4xl mb-4" />
              <span>Guest Management</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <FaMapMarkerAlt className="text-4xl mb-4" />
              <span>Venue Selection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
