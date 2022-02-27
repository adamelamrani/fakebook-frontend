import actionTypes from "./actionTypes";

export const loginUserAction = (userData) => ({
  type: actionTypes.loginUser,
  userData,
});

export const registerUserAction = (user) => ({
  type: actionTypes.registerUser,
  user,
});

export const loadUsersAction = ({ users }) => ({
  type: actionTypes.loadUsers,
  users,
});
