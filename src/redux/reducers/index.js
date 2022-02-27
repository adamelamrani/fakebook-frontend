import { combineReducers } from "redux";
import usersReducers from "./usersReducers";
const rootReducer = combineReducers({
  userData: usersReducers,
});

export default rootReducer;
