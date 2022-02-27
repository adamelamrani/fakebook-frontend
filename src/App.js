import styled from "styled-components";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import FrontPage from "./components/FrontPage/FrontPage";

function App() {
  const StyledAppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      text-justify: center;
      font-weight: 800;
      font-size: 25px;
    }
  `;
  return (
    <StyledAppDiv className="App">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </StyledAppDiv>
  );
}

export default App;
