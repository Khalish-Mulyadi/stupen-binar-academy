import React from "react";
import "bootstrap";
import "./Table.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Table = () => {
  const TableData = () => {
    var data = [];
    for (let i = 0; i < 10; i++) {
      data.push(
        <tr>
          <td>{i + 1}</td>
          <td>User Email{i + 1}</td>
          <td>Car{i + 1}</td>
          <td>Start Rent</td>
          <td>Finish Rent</td>
          <td>Price</td>
          <td>Status</td>
        </tr>
      );
    }
    return data;
  };

  return (
    <div>
      <div className="container-fluid">
        <nav Style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold">
              <a href="dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        <h3 className="fw-bold">Dashboard</h3>
        <h5 className="fw-bold">List Order</h5>
      </div>
      <div className="container-fluid">
        <div className="row">
          <table className="table table-hover" Style="width: 100vw">
            <thead className="table_header">
              <tr>
                <th>No</th>
                <th>User Email</th>
                <th>Car</th>
                <th>Start Rent</th>
                <th>Finish Rent</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="table_data">{TableData()}</tbody>
          </table>
        </div>
      </div>
      {/* Pagination and tools */}
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="row justify-content-between">
            <div className="col-4">
              <p className="fs-6 text-black">Limit</p>
              <div class="dropdown bg-white border border-1 rounded-3">
                <button class="btn dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  10
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/#">
                      25
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      50
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-8">
              <p className="fs-6 text-black">Jump to page</p>
              <form className="d-flex ms-auto">
                <div className="input-group">
                  <input className="form-control" type="search" placeholder="1" aria-label="Search" />
                  <button className="btn btn-primary">Go</button>
                </div>
              </form>
            </div>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="bi bi-chevron-double-left"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="bi bi-chevron-double-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
