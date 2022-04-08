import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};
