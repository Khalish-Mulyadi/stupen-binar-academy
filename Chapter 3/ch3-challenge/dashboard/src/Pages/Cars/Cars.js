import React, { useState } from "react";
import { CardCars } from "../../Assets/Components/CardCars/CardCars";
import "bootstrap";

export const Cars = () => {
  const [showAlert, setAlert] = useState(false);
  const deleteCar = () => {
    setAlert(true);
  };
  return (
    <div>
      {showAlert ? (
        <div className="alert alert-danger text-center mx-auto" role="alert" Style={"width: 30vw"}>
          A simple danger alert—check it out!
        </div>
      ) : null}
      <div className="container-fluid">
        <nav Style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold">
              <a href="car">Cars</a>
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
            <a href="/add-car" type="button" className="btn btn-primary active justify-content-end">
              <i className="bi bi-plus-lg"></i>
              Add New Car
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <button type="button" className="btn btn-info border border-primary text-primary active my-3 me-2" onClick={deleteCar}>
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
        <CardCars />
        <CardCars />
        <CardCars />
        <CardCars />
        <CardCars />
        <CardCars />
      </div>
    </div>
  );
};
