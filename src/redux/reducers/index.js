import { combineReducers } from "redux";
import loadUserReducer from "./loadUsersReducer";
import usersReducers from "./usersReducers";
const rootReducer = combineReducers({
  userData: usersReducers,
  loadUsers: loadUserReducer,
});

export default rootReducer;
