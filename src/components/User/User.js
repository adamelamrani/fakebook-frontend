import StyledUser from "./StyledUser";

const User = ({ userData }) => {
  return (
    <>
      <StyledUser key={userData.id}>
        <img src="/user.png" alt="default user logo" />
        <div>
          <p>{userData.username}</p>
          <p>
            {userData.name} {userData.surname}
          </p>
          <p>{userData.birthdate}</p>
        </div>
      </StyledUser>
    </>
  );
};

export default User;
