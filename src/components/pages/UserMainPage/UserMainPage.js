import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadUsersThunk } from "../../../redux/thunks/thunks";
import User from "../../User/User";

const UserMainPage = () => {
  const users = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return (
    <>
      <h2>fakebook</h2>
      <h3>People around you</h3>
      <ul className="posible-friends">
        {users.map((user) => {
          return (
            <>
              <User userData={user} />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default UserMainPage;
