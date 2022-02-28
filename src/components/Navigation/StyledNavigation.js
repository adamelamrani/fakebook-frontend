import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100vw;
  background-color: rgb(115, 198, 182);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: flex-end;

    li {
      margin-right: 40px;
    }
  }
`;

export default StyledNavigation;
