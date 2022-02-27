const UserMainPage = (users) => {
  return (
    <>
      <h2>fakebook</h2>
      <h3>People around you</h3>
      <ul className="posible-friends">
        {users.map((user) => {
          return (
            <>
              <li>
                <p>
                  {user.name} {user.lastname}
                </p>
              </li>
              <li>
                <p>{user.username}</p>
              </li>
              <li>
                <p>{user.birthdate}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default UserMainPage;
