import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
          </div>
          <a href="https://imgbb.com/">
            <img           
              src="https://i.ibb.co.com/syGDGKH/images.jpg"
              alt="images"
              border="0"
              className="w-24 rounded"
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
          <button class="btn btn-outline btn-success">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
