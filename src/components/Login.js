const Login = () => {
  return (
    <>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Introduce your username"
          autoComplete="off"
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="username"
          id="password"
          placeholder="Introduce your password"
        ></input>
      </form>
    </>
  );
};

export default Login;
