import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    setShowDropdown(false);
  };

  return (
    <div className="bg-[#003366] px-4">
      <div>
        <div className="md:hidden flex items-center justify-center">
          <img src="/logo.png" className="w-20" alt="Logo" />
        </div>
      </div>
      <div>
        <div className="bg-[#003366] px-4">
          <nav className="flex items-center justify-between p-4">
            <div className="hidden md:block flex items-center">
              <img src="/logo.png" className="w-20" alt="Logo" />
            </div>

            <div className="hidden md:flex flex-grow justify-center">
              <Link
                to="/"
                className="text-[#FFD700] mx-4 hover:text-white transition duration-200"
              >
                HOME
              </Link>
              <Link
                to="/events"
                className="text-[#FFD700] mx-4 hover:text-white transition duration-200"
              >
                EVENTS
              </Link>
              <Link
                to="/faqs"
                className="text-[#FFD700] mx-4 hover:text-white transition duration-200"
              >
                FAQS
              </Link>
              <Link
                to="/about"
                className="text-[#FFD700] mx-4 hover:text-white transition duration-200"
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                className="text-[#FFD700] mx-4 hover:text-white transition duration-200"
              >
                CONTACT US
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-[#FFD700] focus:outline-none"
              >
                {showMobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            <div className=" md:flex items-center relative">
              {user ? (
                <div className="flex items-center">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full mr-4 cursor-pointer"
                      onClick={() => setShowDropdown(!showDropdown)}
                    />
                  ) : (
                    <div
                      className="bg-[#FFD700] text-[#003366] w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 cursor-pointer"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {user.displayName?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-[#003366] hover:bg-[#FFD700] transition duration-200"
                        onClick={() => setShowDropdown(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-[#003366] hover:bg-[#FFD700] transition duration-200"
                      >
                        SIGN OUT
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
                  to="/login"
                >
                  SIGN IN
                </Link>
              )}
            </div>
          </nav>

          <div
            className={`flex flex-col items-center ${
              showMobileMenu ? "block" : "hidden"
            } md:hidden bg-[#003366] p-4`}
          >
            <Link
              to="/"
              className="text-[#FFD700] py-2 hover:text-white transition duration-200"
            >
              HOME
            </Link>
            <Link
              to="/events"
              className="text-[#FFD700] py-2 hover:text-white transition duration-200"
            >
              EVENTS
            </Link>
            <Link
              to="/faqs"
              className="text-[#FFD700] py-2 hover:text-white transition duration-200"
            >
              FAQS
            </Link>
            <Link
              to="/about"
              className="text-[#FFD700] py-2 hover:text-white transition duration-200"
            >
              ABOUT US
            </Link>
            <Link
              to="/contact"
              className="text-[#FFD700] py-2 hover:text-white transition duration-200"
            >
              CONTACT US
            </Link>
            <div className="mt-4">
              {user ? (
                <div></div>
              ) : (
                <Link
                  className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
                  to="/login"
                >
                  SIGN IN
                </Link>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
