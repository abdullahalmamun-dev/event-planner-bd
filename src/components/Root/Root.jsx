import Navbar from "../home/Nav/Navbar";
import Footer from "../home/footer/Footer";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
