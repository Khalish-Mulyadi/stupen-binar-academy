import { GET_CAR_DETAIL } from "./types";

const getCarDetail = (carDetail) => {
  return (dispatch) => {
    dispatch({
      type: GET_CAR_DETAIL,
      carDetail: carDetail,
    });
  };
};

export default getCarDetail;
