import actionTypes from "../actions/actionTypes";

const usersReducers = (userData = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionTypes.loginUser:
      newState = action.userData;
      break;
    default:
      newState = [...userData];
  }
  return newState;
};

export default usersReducers;
