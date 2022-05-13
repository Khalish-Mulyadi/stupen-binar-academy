import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import UserRedirect from "./UserRedirect";

const RouterDefault = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<UserRedirect.AdminRedirect />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<UserRedirect.CustomerRedirect />}>
          <Route path="homepage" element={<Homepage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterDefault;
