import { FETCH_CAR, GET_CAR_DETAIL, CAR_DATA_FILTERED } from "../actions/types";

// inisialisasi nilai awal dari state
const initialState = {
  cars: [],
  carsFiltered: [],
  carDetail: {},
  showContent: false,
  showDetail: false,
};

const carReducer = (state = initialState, action) => {
  // fungsi-fungsi reducer
  switch (action.type) {
    case FETCH_CAR:
      return {
        ...state,
        cars: action.payload,
      };
      break;
    case CAR_DATA_FILTERED:
      return {
        ...state,
        carsFiltered: action.carsFiltered,
        showContent: true,
        showDetail: false,
      };
      break;
    case GET_CAR_DETAIL:
      return {
        ...state,
        carDetail: action.carDetail,
        showDetail: true,
        showContent: false,
      };
      break;

    default:
      return state;
  }
};

export default carReducer;
