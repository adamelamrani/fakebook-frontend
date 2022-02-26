import styled from "styled-components";
import Login from "./components/Login/Login";

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
      <h1>Welcome to fakebook</h1>
      <img src="wops.jpg" className="App-logo" alt="logo" />
      <Login></Login>
    </StyledAppDiv>
  );
}

export default App;
