import React from "react";
import Button from "./Button";
import styled from "styled-components";

const NavStyled = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  z-index: -1;
  width: 24%;
  height: 100%;
  margin-left: -1rem;
  padding-top: 9em;
  background-color: #e8dfd8;
  text-align: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

function SideNav(props) {
  return (
    <NavStyled>
      <Button
        clicked={props.click}
        name={"Add new item"}
        color={props.childColor}
        hoverColor={"#e8dfd8"}
      ></Button>
    </NavStyled>
  );
}

export default SideNav;
