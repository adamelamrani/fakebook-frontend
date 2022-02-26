import styled from "styled-components";
import Login from "./components/Login/Login";

function App() {
  const StyledHeading = styled.h1`
    text-align: center;
    text-justify: center;
    font-weight: 800;
    font-size: 25px;
  `;
  return (
    <div className="App">
      <StyledHeading>Welcome to fakebook</StyledHeading>
      <Login />
    </div>
  );
}

export default App;
