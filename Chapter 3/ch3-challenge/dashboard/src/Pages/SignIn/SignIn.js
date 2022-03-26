import React, { useState } from "react";
import "bootstrap";
import loginImage from "../../Assets/img/image 2.png";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertLogin, setAlertLogin] = useState(false);

  let Navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = () => {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passRegex = /([A-Z]{1}[a-z]{1,}[0-9]{1,})/;

    if (emailRegex.test(email) && passRegex.test(password)) {
      Navigate("dashboard");
    } else {
      setAlertLogin(true);
    }
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

          {alertLogin ? (
            <div className="alert alert-danger" role="alert">
              Masukkan email dan password yang benar. Perhatikan penggunaan huruf kapital
            </div>
          ) : null}

          <form className="d-flex flex-column">
            <div className="form-group mb-3">
              <label for="email">Email</label>
              <input type="text" id="email" className="form-control" placeholder="Contoh: johndee@gmail.com" onChange={changeEmail} />
            </div>
            <div className="form-group mb-3 ">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="6+ Karakter" onChange={changePassword} />
            </div>
            <button className="btn btn-primary my-3 button_submit" onClick={signIn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
