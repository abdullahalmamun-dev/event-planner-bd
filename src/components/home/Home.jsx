import React from "react";
import Banner from "./banner/Banner";
import Card from "./card/Card";
import Services from "../about/Services/Services";
import UpcomingEvents from "./upcomingEvents/upcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <Services></Services>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
};

export default Home;
