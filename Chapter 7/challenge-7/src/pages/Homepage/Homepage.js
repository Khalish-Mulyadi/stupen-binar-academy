import React from "react";
import Search from "../../components/Search/Search";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Homepage = (props) => {
  return (
    <div className="App">
      <TopNavbar />
      <Search />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Homepage;
