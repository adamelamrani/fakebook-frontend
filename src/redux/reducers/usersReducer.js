import actionTypes from "../actions/actionTypes";

const usersReducers = (userData = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionTypes.loginUser:
      newState = action.userData;
      break;
    case actionTypes.registerUser:
      newState = [...userData, action.user];
      break;
    case actionTypes.loadUsers:
      newState = [...action.users];
      console.log(newState);
      break;
    default:
      newState = [...userData];
  }
  return newState;
};

export default usersReducers;
