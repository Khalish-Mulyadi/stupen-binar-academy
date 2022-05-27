import axios from "axios";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const authHandle = auth;
const provider = new GoogleAuthProvider();

const loginGoogle = () => {
  signInWithPopup(authHandle, provider)
    .then((data) => {
      if (data.user.accessToken) {
        //   console.log(data);
        //   console.log(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      return data.user;
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginAdmin = (email, password) => {
  var data = JSON.stringify({ email, password });
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BINAR_API}/admin/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config).then((response) => {
    if (response.data.access_token) {
      //   console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const registAdmin = (email, password) => {
  var data = JSON.stringify({ email, password, role: "admin" });
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BINAR_API}/admin/auth/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config).then((response) => {
    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  registAdmin,
  loginGoogle,
  loginAdmin,
  logout,
  getCurrentUser,
};

export default authService;
