import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routers } from "./Routers/Routers";
import "./App.css";
// import { Login } from "./Pages/Login/Login";
// import useToken from "./useToken";

export const App = () => {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="App">
      <Routers />
    </div>
  );
};
