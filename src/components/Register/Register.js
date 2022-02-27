const Register = () => {
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

  const invalidForm = 
  formData.username === "" || 
  formData.password === "" ||
  formData.email === "" ||
  formData.name === "" ||
  formData.lastname === "" ||
  formData.bithdate === "";

  return (
    <>
      <form onSubmit={}>
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
        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
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
          Login
        </button>
      </form>
    </>
  );
}
