import React from "react";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import carImage from "../../img/image 1.png";
import "./CardCars.css";

export const CardCars = () => {
  return (
    <div className="col">
      <div className="card card_cars h-100 rounded">
        <img src={carImage} className="card-img-top p-5 card_image" alt="car-img" />
        <div className="card-body">
          <p className="card-text fs-5">Nama/Tipe Mobil</p>
          <h3>
            <strong>Rp 430.000 / hari</strong>
          </h3>
          <i className="bi bi-key me-3 my-2"></i>
          <span>Start Rent - Finish Rent</span>
          <br />
          <i className="bi bi-clock me-3"></i>
          <span>Updated at 4 Apr 2022, 09.00</span>
          <br />
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-6">
                <button type="button" className="btn border border-danger my-4 button_delete">
                  <span>
                    <i className="bi bi-trash me-3 text-danger"></i>
                    <span className="text-danger">Delete</span>
                  </span>
                </button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success my-4 button_edit">
                  <span>
                    <i className="bi bi-pencil-square me-3 text-light"></i>
                    <span className="text-light">Edit</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
