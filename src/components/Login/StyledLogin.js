import styled from "styled-components";

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 400px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-size: 20px;
      margin-bottom: 8px;
      margin-top: 8px;
      font-weight: bold;
    }

    input {
      display: flex;
      width: 400px;
      height: 60px;
      font-size: 22px;
      border: 2px solid rgb(14, 102, 85);
      border-radius: 7px;
    }

    button {
      margin-top: 10px;
      background-color: rgb(14, 102, 85);
      color: white;
      font-size: 20px;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      box-shadow: rgba(6, 74, 38, 0.3) 0px 19px 38px,
        rgba(6, 74, 38, 0.22) 0px 15px 12px;
      border: 0 solid white;
      transition: border-width 0.6s linear;
    }

    button:active {
      background-color: rgb(206, 233, 219);
      color: rgb(14, 102, 85);
    }

    button:hover {
      border-width: 4px;
    }
  }
`;

export default StyledLogin;
