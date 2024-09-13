import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Events = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("Events.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Get unique categories from articles
  const categories = [
    "All",
    ...new Set(articles.map((article) => article.category)),
  ];

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="py-24">
      <div className="flex flex-wrap justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 my-1 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-[#FFD700] text-[#003366]"
                : "bg-white text-black hover:bg-[#FFD700] hover:text-[#003366]"
            } transition duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 md:mx-20">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="w-full max-w-sm mx-auto bg-white rounded-sm shadow-md overflow-hidden"
          >
            <img
              className="h-48 w-full object-cover"
              src={article.picture}
              alt={article.title}
            />
            <div className="p-6">
              <div className="block mt-1 text-lg leading-tight font-medium text-black w-2/3 md:w-1/3 rounded-xl ">
                <p className="bg-[#FFD700] text-[#003366] px-2 py-2 rounded">
                  Price: {article.price}
                </p>
              </div>
              <h1 className="mt-2 text-xl leading-tight font-bold text-black">
                {article.title}
              </h1>
              <div className="mt-2 flex items-center">
                <span className="inline-block bg-yellow-500 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  {article.category}
                </span>
                <span className="ml-2 text-gray-500">
                  <i className="far fa-calendar-alt"></i> {article.date}
                </span>
                <span className="ml-2 text-gray-500">
                  <i className="fas fa-map-marker-alt"></i> {article.location}
                </span>
              </div>
              <p className="mt-2 text-gray-500">{article.description}</p>
              <div className="mt-4">
                <NavLink
                  to={`/events/${article.id}`}
                  className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
                >
                  Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
