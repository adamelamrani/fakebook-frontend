import { loginUserAction } from "../actions/actionsCreator";

export const loginUserThunk = async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}user/login`, {
    method: "POST",
  });
  const userToken = await response.json();

  dispatch(loginUserAction(userToken));
};
