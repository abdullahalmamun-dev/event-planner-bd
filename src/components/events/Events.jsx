import React, { useEffect, useState } from 'react';
import Navbar from '../home/Nav/Navbar';
import Footer from '../home/footer/Footer';
import { NavLink } from 'react-router-dom';



const Events = () => {

        const [articles, setArticles] = useState([]);
      
        useEffect(() => {
            fetch('Events.json') 
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((data) => {
                setArticles(data);
              })
              .catch((error) => {
                console.error('Error fetching data:', error);
              });
          }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div
        className="hero min-h-screen lg:min-h-screen xl:min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/xHHgJjj/pexels-daian-gan-102127-1300x600.jpg)",
        }}
      >
      </div>
            <div className="py-10 flex justify-center flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24">
                {articles.map((article) => (
                            <div key={article.id}
                            className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 h-80 sm:h-96 md:h-96 lg:h-96 xl:h-96 bg-cover bg-center"
                            style={{
                              backgroundImage:
                                "url('https://i.ibb.co.com/rmRKQKF/ballet-2682290-1920-1300x600.jpg')",
                            }}
                          >
                            <button className="absolute top-2 left-2 bg-green-500 text-white font-bold py-1 sm:py-2 md:py-2 lg:py-2 xl:py-3 px-2 sm:px-4 md:px-4 lg:px-4 xl:px-6 rounded">
                              {article.date}
                            </button>
                            <div className="absolute top-2 right-2 text-white text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">
                              <p className='font-black p-3'>{article.time}</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">
                              <p className='font-black'>{article.title}</p>
                            </div>
                            <button className="absolute bottom-2 right-2 bg-green-500 text-white font-bold py-1 sm:py-2 md:py-2 lg:py-2 xl:py-3 px-2 sm:px-4 md:px-4 lg:px-4 xl:px-6 rounded">
                              <NavLink to={`/events/${article.id}`}> Details</NavLink>
                            </button>
                          </div>

                ))}


      </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Events;