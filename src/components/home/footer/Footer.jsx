import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div>
        <div className="bg-gradient-to-r from-[#003366] to-[#003366] py-16 text-center">
          <h2 className="text-5xl uppercase tracking-widest text-[#FFD700] pb-5">
            Subscribe to our Newsletter
          </h2>
          <h1 className="text-3xl font-bold mt-2 text-[#F5F5F5] pb-5">
            Want something extra?
          </h1>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
            />
            <button className="bg-[#FFD700] text-[#003366] px-6 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
        <footer className="bg-[#002244] py-8">
          <div className="text-center text-[#F5F5F5] space-x-4">
            <a href="/about" className="hover:text-[#FFD700]">
              About Cultre Press
            </a>
            <span>&bull;</span>
            <a href="/faqs" className="hover:text-[#FFD700]">
              FAQs
            </a>
            <span>&bull;</span>
            <a href="/contact" className="hover:text-[#FFD700]">
              Contact
            </a>
            <span>&bull;</span>
            <a href="/login" className="hover:text-[#FFD700]">
              Login
            </a>
          </div>
        </footer>
        <div className="text-[#F5F5F5] copyright text-center py-5 text-sm justify-left bg-gradient-to-r from-[#003366] to-[#003366]">
          © 2025 Culture Press. All rights reserved. Developed By Emperal Tech.
        </div>
      </div>
    </div>
  );
};

export default Footer;
