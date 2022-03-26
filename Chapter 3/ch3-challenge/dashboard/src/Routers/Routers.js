import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavbarDefault } from "../Assets/Components/NavbarDefault/NavbarDefault";
import { AddCar } from "../Pages/AddCar/AddCar";
import { Cars } from "../Pages/Cars/Cars";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { SignIn } from "../Pages/SignIn/SignIn";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn title="Sign In" />} />
        <Route path="dashboard" element={<NavbarDefault title="Dashboard" content={<Dashboard />} />} />
        <Route path="cars" element={<NavbarDefault title="Cars" content={<Cars />} />} />
        <Route path="/add-car" element={<NavbarDefault title="Car Form" content={<AddCar />} />} />
      </Routes>
    </div>
  );
};
