import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersThunk } from "../../../redux/thunks/thunks";
import User from "../../User/User";
import StyledMainPage from "./StyledMainPage";

const UserMainPage = () => {
  const users = useSelector((state) => state.loadUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return (
    <>
      <h2>fakebook</h2>
      <h3>People around you</h3>
      <StyledMainPage className="posible-friends">
        {users.map((user) => {
          return (
            <>
              <User userData={user} />
            </>
          );
        })}
      </StyledMainPage>
    </>
  );
};

export default UserMainPage;
