import { Link } from "react-router-dom";
import StyledNavigation from "./StyledNavigation";

const Navigation = () => {
  return (
    <>
      <StyledNavigation>
        <ul>
          <li>
            <Link to={"/user/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/user/register"}>Register</Link>
          </li>
        </ul>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
