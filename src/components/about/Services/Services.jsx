import React from "react";

const Services = () => {
  const services = [
    {
      title: "Event Planning",
      description:
        "We handle every detail of your event planning, from concept to execution.",
      icon: "eventplanning.webp",
    },
    {
      title: "Venue Selection",
      description:
        "We help you find the perfect venue that fits your vision and budget.",
      icon: "venue.webp",
    },
    {
      title: "Catering Services",
      description:
        "Our catering services ensure your guests enjoy delicious meals tailored to your needs.",
      icon: "catering.webp",
    },
    {
      title: "Entertainment",
      description:
        "We provide a range of entertainment options to keep your guests engaged.",
      icon: "entertainment.webp",
    },
  ];

  return (
    <div className="py-10 px-4 md:px-20 bg-white md:py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-[#003366] text-center mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-full mb-4"
            />
            <h3 className="font-bold text-lg text-[#003366]">
              {service.title}
            </h3>
            <p className="text-gray-700 text-center mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
