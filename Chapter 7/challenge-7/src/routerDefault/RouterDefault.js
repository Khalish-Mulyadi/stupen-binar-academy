import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCar from "../components/AddCar/AddCar";
import Cars from "../components/Cars/Cars";
import Table from "../components/Table/Table";
import Dashboard from "../pages/Dashboard/Dashboard";
import Regist from "../pages/Regist/Regist";
import Homepage from "../pages/Homepage/Homepage";
import Content from "../components/Content/Content";
import Detail from "../components/Detail/Detail";
import LandingPage from "../pages/LandingPage/LandingPage";
import Payment from "../components/Payment/Payment";
import Invoice from "../components/Invoice/Invoice";

const RouterDefault = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="homepage" element={<Homepage />}>
        <Route path="cars" element={<Content />} />
        <Route path="cars/:carID" element={<Detail />} />
      </Route>
      <Route path="homepage/payment" element={<Payment />} />
      <Route path="homepage/payment/invoice" element={<Invoice />} />
      <Route path="registration" element={<Regist />} />
      <Route path="admin" element={<Dashboard />}>
        <Route path="dashboard" element={<Table />} />
        <Route path="cars" element={<Cars />} />
        <Route path="cars/addcar" element={<AddCar />} />
      </Route>
    </Routes>
  );
};

export default RouterDefault;
