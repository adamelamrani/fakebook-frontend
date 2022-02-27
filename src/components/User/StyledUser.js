import styled from "styled-components";

const StyledUser = styled.li`
  margin: 10px;
  background-color: rgb(214, 234, 248);
  border-radius: 5px;
  width: 200px;
  height: 300px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 150px;
    margin-top: 50px;
    border: 2px solid rgb(169, 204, 227);
    border-radius: 5px;
  }
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 600px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: rgb(187, 143, 206);
    border-radius: 5px;
    justify-content: flex-end;
    align-items: center;
    width: 180px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default StyledUser;
