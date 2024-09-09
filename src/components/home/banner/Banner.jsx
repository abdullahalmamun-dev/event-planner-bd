import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen lg:min-h-screen xl:min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/myynPHq/diamond-sunset.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content my-40 lg:my-20 xl:my-10">
          <div className="flex flex-wrap gap-20 text-black  lg:flex-nowrap xl:flex-nowrap">
            <div className="w-full lg:w-1/2 xl:w-1/2 mt-28 lg:mt-20 xl:mt-10">
              <p className="font-black	text-7xl	text-center lg:text-5xl xl:text-4xl">
                The Mystery of the Ordinary Place.
              </p>
              <p className="text-2xl mt-5 lg:text-xl xl:text-lg">
                Entries are open to all artists, designers and studios to submit
                work for the chance to take part in the exclusive exhibition
                being held in Hong Kong From the 2nd to the 7th December 2021.
              </p>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 pl-20 lg:pl-10 xl:pl-5">
              <div className="overflow-x-auto lg:overflow-x-hidden xl:overflow-x-hidden">
                <table className="border-collapse	table mt-20 text-center lg:table-sm xl:table-xs">
                  {/* head */}

                  <tbody>
                    <tr>
                      <td  className="font-black">Day</td>
                      <td>Opening Hours</td>
                    </tr>
                    <tr className="">
                      <th>Monday</th>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <th>Tuesday</th>
                      <td>8:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <th>Wednesday</th>
                      <td>8:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <th>Thursday</th>
                      <td>8:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <th>Friday</th>
                      <td>8:00 AM - 9:00 PM</td>
                    </tr>
                    <tr>
                      <th>Saturday</th>
                      <td>9:00 AM - 9:00 PM</td>
                    </tr>
                    <tr>
                      <th>Sunday</th>
                      <td>9:00 AM - 9:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;