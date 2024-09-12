import React from "react";

const Card = () => {
  return (
    <div className="bg-[#003366] text-[#FFD700] p-6 md:p-10 md:h-[100vh] my-auto">
      <div className="mb-6 md:mb-24 text-center mt-20">
        <h2 className="text-2xl md:text-5xl font-extrabold mb-2">
          How Culture Press can help your business to grow
        </h2>
        <p className="text-lg md:text-2xl">
          Whatever the level of support you require, we are sure that we will
          have a package that meets your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 md:px-20 ">
        <div className="bg-[#F5F5F5] text-[#003366] p-6 rounded-lg flex flex-col items-center justify-between shadow-lg transition-transform transform hover:scale-105">
          <img src="icon1.png" alt="" className="mb-4" />
          <h3 className="text-lg font-extrabold mb-2">Money Back Guarantee</h3>
          <p className="text-center">
            All of our virtual professionals are highly experienced in the areas
            in which they work and have been through a thorough recruitment
            process.
          </p>
        </div>
        <div className="bg-[#F5F5F5] text-[#003366] p-6 rounded-lg flex flex-col items-center justify-between shadow-lg transition-transform transform hover:scale-105">
          <img src="icon2.png" alt="" className="mb-4" />
          <h3 className="text-lg font-extrabold mb-2">Virtual Balancing</h3>
          <p className="text-center">
            We know that sometimes it's difficult to get to the phone if you are
            in the middle of something and you don't want to miss that important
            call that could be the start.
          </p>
        </div>
        <div className="bg-[#F5F5F5] text-[#003366] p-6 rounded-lg flex flex-col items-center justify-between shadow-lg transition-transform transform hover:scale-105">
          <img src="icon3.png" alt="" className="mb-4" />
          <h3 className="text-lg font-extrabold mb-2">Save Meeting Times</h3>
          <p className="text-center">
            All of our virtual professionals are highly experienced in the areas
            in which they work and have been through a thorough recruitment
            process.
          </p>
        </div>
        <div className="bg-[#F5F5F5] text-[#003366] p-6 rounded-lg flex flex-col items-center justify-between shadow-lg transition-transform transform hover:scale-105">
          <img src="icon4.png" alt="" className="mb-4" />
          <h3 className="text-lg font-extrabold mb-2">Timeline & Schedule</h3>
          <p className="text-center">
            You require a receptionist service for extended hours or to include
            weekends or bank holidays then we have packages that cost up to £80
            and with every package.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
