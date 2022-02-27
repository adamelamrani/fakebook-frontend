import actionTypes from "./actionTypes";

export const loginUserAction = (userData) => ({
  type: actionTypes.loginUser,
  userData,
});

export const registerUserAction = (user) => ({
  type: actionTypes.registerUser,
  user,
});
