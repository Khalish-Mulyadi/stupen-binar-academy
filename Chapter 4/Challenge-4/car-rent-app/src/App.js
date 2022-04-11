import React, { useState, useEffect } from "react";
import { Content } from "./Assets/Components/Content/Content";
import { Detail } from "./Assets/Components/Detail/Detail";
import { Footer } from "./Assets/Components/Footer/Footer";
import { Search } from "./Assets/Components/Search/Search";
import { TopNavbar } from "./Assets/Components/TopNavbar/TopNavbar";

function App() {
  const [carData, setCarData] = useState([]);
  const [filteredCarData, setFilteredCarData] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [carDetail, setCarDetail] = useState([]);
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://rent-cars-api.herokuapp.com/admin/car",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCarData(response.data);
        console.log("API was called");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const cariMobil = (filteredCarData) => {
    setFilteredCarData(filteredCarData);
    setShowContent(!showContent);
  };

  const getDetail = (carId, carData) => {
    console.log(carId);
    console.log(carData);
    setCarDetail(carData);
    setShowDetail(!showDetail);
    setShowContent(!showContent);
  };

  return (
    <div className="App">
      <TopNavbar />
      <Search cariMobil={cariMobil} carData={carData} />
      {showContent ? <Content carData={filteredCarData} getDetail={getDetail} /> : null}
      {showDetail ? <Detail carDetail={carDetail} /> : null}
      <Footer />
    </div>
  );
}

export default App;
