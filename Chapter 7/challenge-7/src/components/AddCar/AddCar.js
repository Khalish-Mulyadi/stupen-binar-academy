import React, { useState } from "react";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-dropzone-uploader/dist/styles.css";
import { Link } from "react-router-dom";

const AddCar = () => {
  const [Alert, setAlert] = useState(false);
  const [NamaMobil, setNamaMobil] = useState("");
  const [Kategori, setKategori] = useState("");
  const [Harga, setHarga] = useState("");
  const [Gambar, setGambar] = useState(null);
  const [PrevGambar, setPrevGambar] = useState(null);

  const choosePicture = (e) => {
    // mengecek adakah file apa tidak
    if (e.target.files[0]) {
      // set file yang sudah ada kesalam use State
      setGambar(e.target.files[0]);
      //  inisiai untuk merender data file yang sudah di upload
      const reader = new FileReader();
      // melakukan proses render dan di simpan dalam value
      reader.addEventListener("load", () => {
        setPrevGambar(reader.result);
      });
      // melakuan render berdasrakan image yang di pilih
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", NamaMobil);
    data.append("category", Kategori);
    data.append("price", Harga);
    data.append("status", true);
    data.append("image", Gambar);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BINAR_API_2}/admin/car`,
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAlert(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {Alert ? (
        <div className="alert alert-success w-50 mx-auto text-center" role="alert">
          Data Berhasil Disimpan
        </div>
      ) : null}
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item fw-bold">
                  <Link to="/admin/cars">Cars</Link>
                </li>
                <li className="breadcrumb-item fw-bold">
                  <Link to="/admin/cars">List Car</Link>
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
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label htmlFor="namaMobil" className="col-form-label">
                  Nama*
                </label>
              </div>
              <div className="col-4">
                <input type="text" id="namaMobil" className="form-control border-2 border-dark" aria-describedby="passwordHelpInline" placeholder="Nama Mobil" onChange={(e) => setNamaMobil(e.target.value)} />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label htmlFor="hargaMobil" className="col-form-label">
                  Harga*
                </label>
              </div>
              <div className="col-4">
                <input type="text" id="hargaMobil" className="form-control border-2 border-dark" aria-describedby="passwordHelpInline" placeholder="Harga" onChange={(e) => setHarga(e.target.value)} />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label htmlFor="kategoriMobil" className="col-form-label">
                  Kategori*
                </label>
              </div>
              <div className="col-4">
                <select className="form-select border-2 border-dark" aria-label="Default select example" onChange={(e) => setKategori(e.target.value)}>
                  <option>Pilih Kategori Mobil</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Foto*
                </label>
              </div>
              <div className="col-4">
                <input type="file" id="inputPassword6" className="form-control border-2 border-dark" aria-describedby="passwordHelpInline" onChange={choosePicture} />
                <span className="text-secondary fs-12">File size max 2MB</span>
                {PrevGambar != null && <img src={PrevGambar} alt="gambar mobil" />}
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-2">
                <label htmlFor="inputPassword6" className="col-form-label">
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
                <label htmlFor="inputPassword6" className="col-form-label">
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
                <label htmlFor="inputPassword6" className="col-form-label">
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
                <label htmlFor="inputPassword6" className="col-form-label">
                  Updated at
                </label>
              </div>
              <div className="col-4">
                <span>
                  <strong>-</strong>
                </span>
              </div>
            </div>
            <div className="container mt-5 pt-5">
              <button type="button" className="btn border-primary border-4 me-2 butt_form active text-primary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary border-4 butt_form active">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCar;
