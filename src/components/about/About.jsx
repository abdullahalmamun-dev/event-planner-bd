import React from "react";

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('3.jpg')",
        }}
      >
        <h2 className="text-4xl font-bold text-white uppercase">ABOUT US</h2>
      </div>

      {/* Main Content */}
      <div className="bg-[#F5F5F5] p-6 md:p-20">
        <h3 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4 text-center my-10">
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

        <div className="">
          <h3 className="text-3xl md:text-5xl font-bold text-[#003366] mb-10 text-center my-10">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-lg md:text-2xl text-gray-700 mb-20 text-justify">
            <li className="mb-5">
              <strong>Integrity:</strong> We uphold the highest standards of
              integrity in all of our actions.
            </li>
            <li className="mb-5">
              <strong>Collaboration:</strong> We believe in the power of
              teamwork and collaboration.
            </li>
            <li className="mb-5">
              <strong>Innovation:</strong> We strive to innovate and improve our
              services continually.
            </li>
            <li className="mb-5">
              <strong>Excellence:</strong> We are committed to delivering
              excellence in everything we do.
            </li>
          </ul>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4 text-center my-10 mb-14">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/team1.webp"
              alt="Team Member 1"
              className="w-full h-48 object-cover rounded-t"
            />
            <h4 className="text-xl font-bold text-[#003366] mt-4">
              Yeasin Rafee
            </h4>
            <p className="text-gray-700">Event Coordinator</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/team2.webp"
              alt="Team Member 2"
              className="w-full h-48 object-cover rounded-t"
            />
            <h4 className="text-xl font-bold text-[#003366] mt-4">
              Abdullah Al Mamun
            </h4>
            <p className="text-gray-700">Marketing Specialist</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/team3.webp"
              alt="Team Member 3"
              className="w-full h-48 object-cover rounded-t"
            />
            <h4 className="text-xl font-bold text-[#003366] mt-4">
              Alif Hossain
            </h4>
            <p className="text-gray-700">Creative Director</p>
          </div>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4 text-center my-10">
          What Our Clients Say
        </h3>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <p className="text-lg md:text-2xl text-gray-700 italic mb-4">
            "Culture Press made our event unforgettable! The attention to detail
            was remarkable."
          </p>
          <p className="text-right text-gray-600">- SHAHORIYA ISLAM SHAFI</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <p className="text-lg md:text-2xl text-gray-700 italic mb-4">
            "Their team was incredibly professional and easy to work with.
            Highly recommend!"
          </p>
          <p className="text-right text-gray-600">- JOHN PAUL</p>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4 text-center my-10">
          Get In Touch
        </h3>
        <p className="text-lg md:text-2xl text-gray-700 text-center mb-4">
          Have questions or want to book an event? Reach out to us!
        </p>
        <p className="text-lg md:text-2xl text-gray-700 text-center mb-4">
          Email:{" "}
          <a href="mailto:info@culturepress.com" className="text-[#FFD700]">
            info@culturepress.com
          </a>
        </p>
        <p className="text-lg md:text-2xl text-gray-700 text-center mb-4">
          Phone: <span className="text-[#FFD700]">(+880) 1521-747442</span>
        </p>
      </div>
    </div>
  );
};

export default About;
