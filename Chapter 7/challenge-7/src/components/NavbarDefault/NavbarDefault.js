import React, { useState } from "react";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./NavbarDefault.css";

const NavbarDefault = ({ children }) => {
  const [isActive, setActive] = useState("false");
  const sideBarControl = () => {
    setActive(!isActive);
  };
  return (
    <div className="wrapper sidebar_dashboard">
      <nav id="sidebar" className={isActive ? "active" : ""}>
        <div className="sidebar-header">
          <h3>Binar Car Rental</h3>
          <strong>BCR</strong>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/admin/dashboard">
              <i className="bi bi-house-fill"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/cars">
              <i className="bi bi-truck"></i>
              Cars
            </Link>
          </li>
        </ul>
      </nav>

      <div id="content" className={isActive ? "active" : ""}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid top_navbar">
            <button type="button" id="sidebarCollapse" className="btn btn-light" onClick={sideBarControl}>
              <i className="bi bi-list"></i>
            </button>
            <form className="d-flex ms-auto">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle me-4 text-dark" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-fill"></i>
                  <span>Admin</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-dashboard">{children}</div>
      </div>
    </div>
  );
};

export default NavbarDefault;
