import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";

const Navbar = () => {
  const [articles, setArticles] = useState([]);

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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="bg-[#003366]">
      <nav className="flex flex-col md:flex-row md:justify-between items-center mx-auto text-lg text-[#FFD700] p-4">
        <div className="flex items-center mx-auto md:mx-0 mb-4 md:mb-0">
          <img src="logo.png" className="w-20" alt="Logo" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-4 md:mb-0 relative">
          <Link to={"/"} className="hover:text-white transition duration-200">
            HOME
          </Link>
          <Link
            to={"/journal"}
            className="hover:text-white transition duration-200"
          >
            JOURNAL
          </Link>
          <div className="relative">
            <button
              className="hover:text-white transition duration-200 flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              EVENTS
              <svg
                className={`h-4 w-4 ml-2 transition duration-200 ${
                  showDropdown ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute bg-[#003366] rounded-md shadow-lg mt-2 w-64 z-10 py-2">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    className="block px-6 py-3 hover:bg-[#004080]"
                    to={`/events/${article.id}`}
                  >
                    {article.title}
                  </Link>
                ))}
                <Link className="block px-6 py-3 hover:bg-[#004080]">
                  Upcoming Events
                </Link>
              </div>
            )}
          </div>
          <Link
            to={"/faqs"}
            className="hover:text-white transition duration-200"
          >
            FAQS
          </Link>
          <Link
            to={"/about"}
            className="hover:text-white transition duration-200"
          >
            ABOUT US
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-white transition duration-200"
          >
            CONTACT US
          </Link>
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
          >
            SIGN OUT
          </button>
        ) : (
          <Link
            className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
            to={"/login"}
          >
            SIGN IN
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
