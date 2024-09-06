import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-20 ">
        <nav>
          <p className="text-5xl font-black	text-black footer-title">Our Monthly Newsletter</p>
          <p className="text-xl py-5">Sign up for our weekly tips, skills, gear and interestng newsletters.</p>
          <input
            type="text"
            placeholder="Your email address"
            className="input input-bordered w-full max-w-xs"
          />
        </nav>
        <nav>
          <h6 className="footer-title">GOOD TO KNOW</h6>
          <NavLink className="link link-hover">Home</NavLink>
          <NavLink className="link link-hover">Journal</NavLink>
          <NavLink className="link link-hover">Our Themes</NavLink>
          <NavLink className="link link-hover">Purchase</NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">CATEGORIES</h6>
          <NavLink className="link link-hover">Architecture</NavLink>
          <NavLink className="link link-hover">Design</NavLink>
          <NavLink className="link link-hover">Fashion</NavLink>
          <NavLink className="link link-hover">Featured</NavLink>
          <NavLink className="link link-hover">Lifestyle</NavLink>
          <NavLink className="link link-hover">Paintings</NavLink>
          <NavLink className="link link-hover">Photography</NavLink>
          <NavLink className="link link-hover">Urban</NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">Recent Posts</h6>
          <NavLink className="link link-hover">5 Contemporary Tattoo Artists That You Will Love</NavLink>
          <NavLink className="link link-hover">Born to design & produce</NavLink>
          <NavLink className="link link-hover">Painting from nature is not copying the object; it is realizing one’s sensations.</NavLink>
          <NavLink className="link link-hover">14 Things You Didn’t Know About the Mona Lisa</NavLink>
          <NavLink className="link link-hover">The creation of a mural; the Royal Hotel</NavLink>

        </nav>
      </footer>
    </div>
  );
};

export default Footer;
