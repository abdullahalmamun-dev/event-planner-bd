import React from "react";

const About = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('3.jpg')",
        }}
      >
        <h2 className="text-4xl font-bold text-white uppercase">ABOUT US</h2>
      </div>

      <div className="bg-[#F5F5F5] p-6 md:p-20 ">
        <h3 className="text-3xl  md:text-5xl font-bold text-[#003366] mb-4 text-center my-10">
          Who We Are
        </h3>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 mt-10 text-justify">
          At Culture Press, we believe in the power of events to bring people
          together. Founded in 2023, our journey began with a passion for
          creating unforgettable experiences. Our mission is to transform your
          ideas into reality, ensuring every event is a unique celebration.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 text-justify">
          We cater to a diverse clientele, from corporate gatherings to personal
          celebrations. Our dedicated team works closely with you to understand
          your vision and deliver exceptional results that exceed your
          expectations.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 mb-4 text-justify">
          Our approach combines creativity with meticulous planning. We handle
          every detail, from venue selection to logistics, allowing you to enjoy
          the moment without stress. Our commitment to excellence ensures that
          your event runs smoothly and successfully.
        </p>
      </div>
    </div>
  );
};

export default About;
