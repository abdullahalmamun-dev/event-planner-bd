import React from "react";
import Banner from "./banner/Banner";
import Card from "./card/Card";
import MakingDifference from "./makingdifference/MakingDifference";
import Login from "../login/Login";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <MakingDifference></MakingDifference> */}
      <Card></Card>
    </div>
  );
};

export default Home;
