import React from "react";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export const AddCar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <nav Style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item fw-bold">
                  <a href="cars">Cars</a>
                </li>
                <li className="breadcrumb-item fw-bold">
                  <a href="cars">List Car</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add New Car
                </li>
              </ol>
            </nav>

            <h5 className="fw-bold">Add New Car</h5>
          </div>
          <div className="col-auto"></div>
        </div>
        <div className="container form_bg">
          <form className="mt-4">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Nama*
                </label>
              </div>
              <div className="col-4">
                <input type="email" id="inputPassword6" className="form-control border-2 border-dark" aria-describedby="passwordHelpInline" placeholder="Placeholder" />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Harga*
                </label>
              </div>
              <div className="col-4">
                <input type="email" id="inputPassword6" className="form-control border-2 border-dark" aria-describedby="passwordHelpInline" placeholder="Placeholder" />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Foto*
                </label>
              </div>
              <div className="col-4">
                <input type="file" id="inputPassword6" className="form-control border-2 border-dark" aria-describedby="passwordHelpInline" placeholder="IMG/2/2022/001" />
                <span className="text-secondary fs-12">File size max 2MB</span>
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Start Rent
                </label>
              </div>
              <div className="col-4">
                <span>
                  <strong>-</strong>
                </span>
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Finish Rent
                </label>
              </div>
              <div className="col-4">
                <span>
                  <strong>-</strong>
                </span>
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Created at
                </label>
              </div>
              <div className="col-4">
                <span>
                  <strong>-</strong>
                </span>
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Updated at
                </label>
              </div>
              <div className="col-4">
                <span>
                  <strong>-</strong>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <button type="button" className="btn border-primary border-4 me-2 butt_form active text-primary" Style="width: 90px">
          Cancel
        </button>
        <button type="button" className="btn btn-primary border-4 butt_form active" Style="width: 70px">
          Save
        </button>
      </div>
    </>
  );
};
