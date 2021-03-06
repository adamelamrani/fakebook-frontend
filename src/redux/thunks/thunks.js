import jwtDecode from "jwt-decode";
import {
  loadUsersAction,
  loginUserAction,
  registerUserAction,
} from "../actions/actionsCreator";

export const loginUserThunk = (user, navigate) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    const token = await response.json();
    const { id, username } = await jwtDecode(token.token);
    localStorage.setItem("UserToken", token.token);
    dispatch(loginUserAction({ id, username, token: token.token }));
    navigate("/user/main-page");
  }
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}user/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const newUser = await response.json();
  dispatch(registerUserAction(newUser));
};

export const loadUsersThunk = async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}user/main-page`
  );
  const users = await response.json();
  dispatch(loadUsersAction(users));
};
