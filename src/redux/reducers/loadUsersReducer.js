import actionTypes from "../actions/actionTypes";

const loadUserReducer = (usersState = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionTypes.loadUsers:
      newState = [...action.users];
      break;
    default:
      newState = [...usersState];
  }
  return newState;
};
export default loadUserReducer;
