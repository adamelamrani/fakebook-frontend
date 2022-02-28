import actionTypes from "../actions/actionTypes";

const usersReducers = (userData = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionTypes.registerUser:
      newState = [...userData, action.user];
      break;
    default:
      newState = [...userData];
  }
  return newState;
};

export default usersReducers;
