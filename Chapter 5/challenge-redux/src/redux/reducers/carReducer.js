import { FETCH_CAR, GET_CAR_DETAIL } from "../actions/types";

// inisialisasi nilai awal dari state
const initialState = {
  cars: [],
  carDetail: {},
  Count: 0,
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
    case GET_CAR_DETAIL:
      return {
        ...state,
        carDetail: action.carDetail,
      };
      break;

    default:
      return state;
  }
};

export default carReducer;
