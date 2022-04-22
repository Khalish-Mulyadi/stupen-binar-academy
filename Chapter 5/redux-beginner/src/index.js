import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import reducer untuk user
// import userReducer from "./features/user";

// // membuat store
// const store = configureStore({
//   reducer: {
//     // menambahkan userReducer ke dalam reducer agar digunakan
//     user: userReducer,
//   },
// });

let initialStore = {
  totalNilai: 0,
};

const reducerGlobal = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_NILAI":
      return {
        ...state,
        totalNilai: state.totalNilai + 1,
      };

    case "REDUCE_NILAI":
      return {
        ...state,
        totalNilai: state.totalNilai - 1,
      };

    default:
      return state;
  }
};

const storeGlobal = createStore(reducerGlobal);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* semua komponen yang ada di dalam Provider 
        dapat menggunakan store
    */}
    <Provider store={storeGlobal}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
