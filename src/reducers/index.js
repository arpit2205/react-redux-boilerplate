import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./logged";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedReducer,
});

export default allReducers;
