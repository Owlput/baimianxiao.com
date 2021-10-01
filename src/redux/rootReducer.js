import { combineReducers } from "redux";
import locationReducer from "./reducers/locationSlice";

const rootReducer = combineReducers({
  location: locationReducer,
});

export default rootReducer;
