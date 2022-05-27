import { GET_CAR_DETAIL } from "./types";

var axios = require("axios");

// var config = {
//   method: "get",
//   url: `${process.env.REACT_APP_BINAR_APPX}admin/car`,
//   headers: {},
// };

const getCarDetail = (carID) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BINAR_API}/admin/car/${carID}`,
      headers: {},
    })
      .then(function (response) {
        console.log(response.data);
        dispatch({
          type: GET_CAR_DETAIL,
          carDetail: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export default getCarDetail;
