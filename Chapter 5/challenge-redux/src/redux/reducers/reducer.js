import { combineReducers } from "redux";
import carReducer from "./carReducer";

// menggabungkan berbagai reducer
export default combineReducers({
  carReducer: carReducer,
});
