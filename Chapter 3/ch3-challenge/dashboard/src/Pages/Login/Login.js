import React, { useState } from "react";
import "bootstrap";
import loginImage from "../../Assets/img/image 2.png";
import "./Login.css";
import PropTypes from "prop-types";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="row">
      <div className="fill col-lg-8">
        <img src={loginImage} alt="" />
      </div>
      <div className="col-lg-4 my-auto">
        <div className="container-fluid my-4">
          <div className="logo"></div>
          <div className="text my-3">Welcome, Admin BCR</div>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <div className="form-group mb-3">
              <label for="username">Email</label>
              <input type="text" id="username" name="username" className="form-control" placeholder="Contoh: johndee@gmail.com" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-group mb-3 ">
              <label for="password">Password</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="6+ Karakter" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary my-3 button_submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
