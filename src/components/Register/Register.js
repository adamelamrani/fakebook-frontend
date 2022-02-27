import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserThunk } from "../../redux/thunks/thunks";
import StyledLogin from "../Login/StyledLogin";

const Register = () => {
  const blankForm = {
    username: "",
    password: "",
    email: "",
    name: "",
    surname: "",
    bithdate: "",
  };

  const [formData, setFormData] = useState(blankForm);
  const navigate = useNavigate();
  const userDataInput = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const invalidForm =
    formData.username === "" ||
    formData.password === "" ||
    formData.email === "" ||
    formData.name === "" ||
    formData.surname === "";

  const dispatch = useDispatch();
  const registerUser = (event) => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
    navigate("/user/login");
  };
  return (
    <>
      <h2>fakebook</h2>
      <StyledLogin onSubmit={registerUser} className="register-form">
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
          name="password"
          id="password"
          placeholder="Introduce your password"
          onChange={userDataInput}
        ></input>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@something.com"
          autoComplete="off"
          onChange={userDataInput}
        ></input>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Introduce your name"
          onChange={userDataInput}
        ></input>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Introduce your last name"
          autoComplete="off"
          onChange={userDataInput}
        ></input>
        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          onChange={userDataInput}
        ></input>
        <button type="submit" disabled={invalidForm}>
          Register
        </button>
      </StyledLogin>
    </>
  );
};

export default Register;
