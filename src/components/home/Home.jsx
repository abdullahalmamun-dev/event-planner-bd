import React from 'react';
import Navbar from './Nav/Navbar';
import Banner from './banner/Banner';
import Card from './card/Card';
import Footer from './footer/Footer';
import MakingDifference from './makingdifference/MakingDifference';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <MakingDifference></MakingDifference>
            <Card></Card>
            <Footer></Footer>            
        </div>
        
    );
};

export default Home;