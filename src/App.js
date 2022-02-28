import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import FrontPage from "./components/pages/FrontPage/FrontPage";
import UserMainPage from "./components/pages/UserMainPage/UserMainPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const StyledAppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    h1 {
      text-align: center;
      text-justify: center;
      font-weight: 800;
      font-size: 25px;
    }
  `;
  return (
    <StyledAppDiv className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/main-page" element={<UserMainPage />} />
      </Routes>
    </StyledAppDiv>
  );
}

export default App;
