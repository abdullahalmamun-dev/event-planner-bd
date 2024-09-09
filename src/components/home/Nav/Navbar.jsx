import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/postfeature"}>Posts and Features</NavLink>
              </li>
              <li>
                <NavLink to={"/journal"}>Journal</NavLink>
              </li>
              <li>
                <NavLink to={"/events"}>Events</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </ul>
          </div>
          <a href="/">
            <img
              src="https://i.ibb.co.com/syGDGKH/images.jpg"
              alt="images"
              border="0"
              className="w-24 rounded lg:w-32"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/postfeature"}>Posts and Features</NavLink>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to={"/about"}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about/faqs"}>Faqs</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about/pricing"}>Pricing</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to={"/journal"}>Journal</NavLink>
            </li>
            <li>
              <NavLink to={"/events"}>Events</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            className="btn btn-outline btn-success lg:btn-md md:btn-sm sm:btn-xs"
            to={"/login"}
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;