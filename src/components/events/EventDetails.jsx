import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const EventDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const { user, bookings, setBookings } = useContext(AuthContext);

  useEffect(() => {
    fetch("/Events.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const foundArticle = data.find((item) => item.id === parseInt(id));
        setArticle(foundArticle);
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleBooking = () => {
    if (user) {
      const bookingDetails = {
        id: article.id,
        title: article.title,
        date: article.date,
        time: article.time,
        price: article.price,
      };

      setBookings((prevBookings) => [...prevBookings, bookingDetails]);
      alert(`You have booked ${article.title}`);
    } else {
      alert("Please sign in to book this event.");
    }
  };

  if (!article) {
    return <div className="py-10 text-center text-lg">Loading...</div>;
  }

  return (
    <div className="py-16 px-4 md:px-20">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={article.picture}
          alt={article.title}
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#003366] mb-2">
            {article.title}
          </h1>
          <div className="flex items-center mb-4">
            <span className="inline-block bg-yellow-500 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
              {article.category}
            </span>
            <span className="ml-4 text-gray-500">
              <i className="far fa-calendar-alt"></i> {article.date}
            </span>
            <span className="ml-4 text-gray-500">
              <i className="fas fa-clock"></i> {article.time}
            </span>
            <span className="ml-4 text-gray-500 font-bold">
              {article.price}
            </span>
          </div>
          <p className="text-gray-700 mb-4 text-justify leading-10">
            {article.article}
          </p>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
              onClick={handleBooking}
            >
              BOOK NOW
            </button>
            <button className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200">
              <a href="/events">Back to Events</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
