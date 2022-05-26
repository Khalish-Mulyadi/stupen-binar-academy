import React, { useState } from "react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import "bootstrap";
import loginImage from "../../img/image 2.png";
import "./Regist.css";

const Regist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegist = async (e) => {
    e.preventDefault();
    try {
      await authService.registAdmin(email, password).then(() => {
        // console.log(authService.registAdmin);
        navigate("/login");
        window.location.reload();
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="row login_page">
      <div className="fill col-lg-8">
        <img src={loginImage} alt="" />
      </div>
      <div className="col-lg-4 my-auto">
        <div className="container-fluid my-4">
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}
          <div className="logo"></div>
          <div className="text my-3">Create new Account</div>
          <form className="d-flex flex-column" onSubmit={handleRegist}>
            <div className="form-group mb-3">
              <label htmlFor="username">Email</label>
              <input type="text" id="username" name="username" className="form-control" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3 ">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="6+ Karakter" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary my-3 button_submit">
              Sign Up
            </button>
          </form>
          <div>
            <p>
              Sudah punya akun? <a href="login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regist;
