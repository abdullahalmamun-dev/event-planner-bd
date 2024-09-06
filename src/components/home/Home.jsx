import React from 'react';
import Navbar from './Nav/Navbar';
import Banner from './banner/Banner';
import Card from './card/Card';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <Footer></Footer>            
        </div>
        
    );
};

export default Home;