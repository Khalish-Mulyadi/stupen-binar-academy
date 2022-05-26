import React, { useState, useEffect } from "react";
import { CardCars } from "../CardCars/CardCars";
import "bootstrap";
import { Link } from "react-router-dom";
import getCarData from "../../redux/actions/getCarData";
import { connect } from "react-redux";
const Cars = (props) => {
  useEffect(() => {
    props.getCarData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <nav Style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold">
              <a href="cars">Cars</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              List Car
            </li>
          </ol>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-10">
            <h3 className="fw-bold">List Car</h3>
          </div>
          <div className="col-2">
            <Link to="addcar" type="button" className="btn btn-primary active justify-content-end">
              <i className="bi bi-plus-lg"></i>
              Add New Car
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <button type="button" className="btn btn-info border border-primary text-primary active my-3 me-2">
          All
        </button>
        <button type="button" className="btn btn-light border border-secondary text-secondary my-3 me-2">
          Small
        </button>
        <button type="button" className="btn btn-light border border-secondary text-secondary my-3 me-2">
          Medium
        </button>
        <button type="button" className="btn btn-light border border-secondary text-secondary my-3 me-2">
          Large
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.carData.map((e, i) => {
          return <CardCars carData={e} key={i} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.carReducer.cars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCarData: () => dispatch(getCarData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cars);
