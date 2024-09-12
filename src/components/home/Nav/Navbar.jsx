import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [articles, setArticles] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);

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

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="bg-[#003366] px-10">
      <nav className="flex flex-col md:flex-row md:justify-between items-center mx-auto text-lg text-[#FFD700] p-4">
        <div className="flex items-center mx-auto md:mx-0 mb-4 md:mb-0">
          <img src="logo.png" className="w-20" alt="Logo" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-[#FFD700] focus:outline-none"
          >
            {showMobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`flex md:flex-nowrap flex-col md:flex-row gap-4 md:gap-10 mb-4 md:mb-0 relative ${
            showMobileMenu ? "block" : "hidden md:flex"
          }`}
        >
          <Link to={"/"} className="hover:text-white transition duration-200">
            HOME
          </Link>

          <Link
            to={"/events"}
            className="hover:text-white transition duration-200"
          >
            EVENTS
          </Link>
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

        <div className="flex justify-center mb-4">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
