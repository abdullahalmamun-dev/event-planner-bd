import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  }
  return (
    <div>
      <div className="navbar bg-base-100 px-10">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
              <details>
                <summary>Events</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to={"/about"}>About Us</NavLink>
                  </li>
                </ul>
              </details>
            </li>
              <li>
                <NavLink to={"/journal"}>Journal</NavLink>
              </li>
              <li>
                    <NavLink to={"/about/faqs"}>Faqs</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
                    <NavLink to={"/about/contact"}>Contact Us</NavLink>
            </li>
            </ul>
          </div>
          <a href="/">
            <img
              src="logo.png"
              alt="images"
              border="0"
              className="w-12 rounded lg:w-16 box-border"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <details>
                <summary>Events</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to={"/about"}>About Us</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to={"/journal"}>Journal</NavLink>
            </li>
            <li>
                    <NavLink to={"/about/faqs"}>Faqs</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
                    <NavLink to={"/about/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
            <button onClick={handleLogout}
            className="btn btn-outline btn-success lg:btn-md md:btn-sm sm:btn-xs"
          >
            Log Out
            </button>

            :
            <NavLink
            className="btn btn-outline bg-yellow-700 text-indigo-50	 lg:btn-md md:btn-sm sm:btn-xs"
            to={"/login"}
          >
            Login
          </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;