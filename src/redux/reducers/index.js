import { combineReducers } from "redux";
import usersReducers from "./usersReducer";
const rootReducer = combineReducers({
  userData: usersReducers,
});

export default rootReducer;
