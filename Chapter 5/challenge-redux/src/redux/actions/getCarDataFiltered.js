import { CAR_DATA_FILTERED } from "./types";

const getCarDataFiltered = (carsFiltered) => {
  return (dispatch) => {
    dispatch({
      type: CAR_DATA_FILTERED,
      carsFiltered: carsFiltered,
    });
  };
};
export default getCarDataFiltered;
