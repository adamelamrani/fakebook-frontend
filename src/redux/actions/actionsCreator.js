import actionTypes from "./actionTypes";

export const loginUserAction = (userData) => ({
  type: actionTypes.loginUser,
  userData,
});
