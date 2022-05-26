import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDefault from "../../components/NavbarDefault/NavbarDefault";

const Dashboard = () => {
  return (
    <div>
      <NavbarDefault>
        <Outlet />
      </NavbarDefault>
    </div>
  );
};

export default Dashboard;
