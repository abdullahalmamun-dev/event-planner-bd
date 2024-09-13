import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      title: "Tech Conference 2023",
      date: "September 10, 2023",
      location: "Tech Center, San Francisco",
      image: "tech.webp",
    },
    {
      title: "Art Exhibition",
      date: "October 15, 2023",
      location: "Art Gallery, New York",
      image: "art.webp",
    },
    {
      title: "Music Festival",
      date: "November 20, 2023",
      location: "City Park, Chicago",
      image: "music.webp",
    },
  ];

  return (
    <div className="py-10 px-4 md:px-20 bg-gray-100 md:py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-[#003366] text-center mb-10">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg text-[#003366] mb-2">
                {event.title}
              </h3>
              <div className="flex items-center text-gray-700 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
