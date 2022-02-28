import { useEffect, useState } from "react";
import StyledLogin from "./StyledLogin";
import { useDispatch } from "react-redux";
import { loadUsersThunk, loginUserThunk } from "../../redux/thunks/thunks";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/actions/actionsCreator";
import jwtDecode from "jwt-decode";

const Login = () => {
  const blankLogin = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankLogin);

  const userDataInput = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const invalidForm = formData.username === "" || formData.password === "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logUser = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(formData, navigate));
  };

  useEffect(() => {
    const token = localStorage.getItem("UserToken");
    if (token) {
      console.log(token);
      const { name, username, id } = jwtDecode(token);
      dispatch(loginUserAction({ name, username, id, loggedIn: true }));
    }
  }, [dispatch]);
  return (
    <>
      <StyledLogin onSubmit={logUser} className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Introduce your username"
          autoComplete="off"
          onChange={userDataInput}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="username"
          id="password"
          placeholder="Introduce your password"
          onChange={userDataInput}
        ></input>
        <button type="submit" disabled={invalidForm}>
          Login
        </button>
      </StyledLogin>
    </>
  );
};

export default Login;
