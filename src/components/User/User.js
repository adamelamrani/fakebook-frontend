const User = (userData) => {
  return (
    <>
      <li>
        <p>{userData.username}</p>
      </li>
      <li>
        <p>
          {userData.name} {userData.lastname}
        </p>
      </li>
      <li>
        <p>{userData.birthdate}</p>
      </li>
    </>
  );
};

export default User;
