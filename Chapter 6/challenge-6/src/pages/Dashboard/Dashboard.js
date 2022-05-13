import React from "react";
import Table from "../../components/Table/Table";
import NavbarDefault from "../../components/NavbarDefault/NavbarDefault";

const Dashboard = () => {
  return (
    <div>
      <NavbarDefault>
        <Table />
      </NavbarDefault>
    </div>
  );
};

export default Dashboard;
