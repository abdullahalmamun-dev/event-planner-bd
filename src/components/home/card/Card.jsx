import React from "react";

const Card = () => {
  return (
    <div className="h-screen p-24 bg-slate-100	">
      <div className="p-10">
        <p className="text-6xl	font-black ">WHAT'S ON</p>
        <p className="text-base text-emerald-500 py-10">Upcoming events, exhibitions and happenings</p>
      </div>
      <div className="flex gap-20">
        <div
          className="relative w-96 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/rmRKQKF/ballet-2682290-1920-1300x600.jpg')",
          }}
        >
          <button className="absolute top-2 left-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            Nov 21 - Nov 28
          </button>
          <div className="absolute top-2 right-2 text-white">12:00AM</div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Art in Motion
          </div>
          <button className="absolute bottom-2 right-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            DETAILS
          </button>
        </div>
        <div
          className="relative w-96 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/rmRKQKF/ballet-2682290-1920-1300x600.jpg')",
          }}
        >
          <button className="absolute top-2 left-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            Nov 21 - Nov 28
          </button>
          <div className="absolute top-2 right-2 text-white">12:00AM</div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Art in Motion
          </div>
          <button className="absolute bottom-2 right-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            DETAILS
          </button>
        </div>
        <div
          className="relative w-96 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/rmRKQKF/ballet-2682290-1920-1300x600.jpg')",
          }}
        >
          <button className="absolute top-2 left-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            Nov 21 - Nov 28
          </button>
          <div className="absolute top-2 right-2 text-white">12:00AM</div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Art in Motion
          </div>
          <button className="absolute bottom-2 right-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            DETAILS
          </button>
        </div>
        <div
          className="relative w-96 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/rmRKQKF/ballet-2682290-1920-1300x600.jpg')",
          }}
        >
          <button className="absolute top-2 left-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            Nov 21 - Nov 28
          </button>
          <div className="absolute top-2 right-2 text-white">12:00AM</div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Art in Motion
          </div>
          <button className="absolute bottom-2 right-2 bg-green-500 text-white font-bold py-2 px-4 rounded">
            DETAILS
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;
