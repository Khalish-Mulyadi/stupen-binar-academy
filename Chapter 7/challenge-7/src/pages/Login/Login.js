import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import "bootstrap";
import loginImage from "../../img/image 2.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (authService.getCurrentUser().stsTokenManager.accessToken) {
  //     // console.log(authService.getCurrentUser());
  //     navigate("/homepage");
  //     window.location.reload();
  //   }
  // }, []);

  const handleGoogleLogin = async (e) => {
    try {
      await authService.loginGoogle();
      navigate("/homepage");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.loginAdmin(email, password).then(() => {
        navigate("/dashboard");
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row login_page">
      <div className="fill col-lg-8">
        <img src={loginImage} alt="" />
      </div>
      <div className="col-lg-4 my-auto">
        <div className="container-fluid my-4">
          <div className="logo"></div>
          <div className="text my-3">Welcome, Admin BCR</div>
          <form className="d-flex flex-column" onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="username">Email</label>
              <input type="text" id="username" name="username" className="form-control" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3 ">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="6+ Karakter" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary my-3 button_submit">
              Sign In
            </button>
          </form>
          <div>
            <GoogleButton className="w-100" type="light" label="Masuk dengan Google" onClick={handleGoogleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
