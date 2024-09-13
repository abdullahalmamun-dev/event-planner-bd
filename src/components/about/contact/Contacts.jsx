import React from "react";

const Contacts = () => {
  return (
    <div className="bg-[#F5F5F5] p-4 md:p-10">
      <div className="w-1/2 p-4 md:space-y-5 mx-auto">
        <div className="text-lg md:text-2xl border-8 p-20">
          <p className="text-2xl md:text-4xl font-bold text-[#003366] mb-10 text-center uppercase leading-1">
            Contact Information
          </p>
          <p className="text-gray-700 mb-4 leading-10 text-justify">
            We are open at 09:00AM – 06:00PM on weekdays.
          </p>
          <p className="text-gray-700 mb-2 text-justify leading-10">
            <strong>Address:</strong> House: 95, Road: 13, Nobinagar Housing,
            Mohammadpur, Dhaka- 1207
          </p>
          <p className="text-gray-700 mb-2 text-justify leading-10">
            <strong>Email:</strong> info@culturepress.com
          </p>
          <p className="text-gray-700 mb-2 text-justify leading-10">
            <strong>Phone:</strong> +880 1521747442
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-10">
            <strong>Fax:</strong> +880 28016370
          </p>
        </div>
      </div>
      <div className="bg-[#F5F5F5] p-6 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl leading-10 md:text-4xl font-bold text-[#003366] uppercase">
            Contact <span className="text-[#FFD700]">Us</span>
          </h2>
          <p className="text-lg text-gray-700 mt-2 md:mb-10">
            Have questions or want to learn more about our events? Contact us
            now!
          </p>
        </div>
        <div className="flex flex-col justify-center items-start md:p-10 bg-white rounded-lg shadow-lg w-9/10 md:w-2/3 mx-auto">
          <div className="w-full p-4">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              ></textarea>
              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-gray-700">
                  I consent to Culture Press collecting my details through this
                  form.
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#FFD700] text-[#003366] px-6 py-3 rounded hover:bg-[#FFC107] transition duration-200"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#003366] mb-4 md:mb-16 uppercase">
          Our Location
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch md:mb-8  ">
          <div className="w-full md: rounded-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.28838084892806!2d90.3442955714905!3d23.757285059076754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf8f5da8c1a1%3A0xde9d90e4ded1e74a!2sNorth%20South%20Tower!5e0!3m2!1sen!2sbd!4v1725665891729!5m2!1sen!2sbd"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-20 px-5">
        <p className="text-center font-bold text-[#003366] mb-4">
          Social Links
        </p>
        <div className="flex space-x-4 justify-center">
          <a href="#" className="text-gray-700 hover:text-[#FFD700]">
            Facebook
          </a>
          <a href="#" className="text-gray-700 hover:text-[#FFD700]">
            Twitter
          </a>
          <a href="#" className="text-gray-700 hover:text-[#FFD700]">
            Instagram
          </a>
          <a href="#" className="text-gray-700 hover:text-[#FFD700]">
            YouTube
          </a>
          <a href="#" className="text-gray-700 hover:text-[#FFD700]">
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
