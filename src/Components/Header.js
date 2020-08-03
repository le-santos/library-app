import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: block;
  padding: 0.75rem 1.1rem;
  color: #0c5460;
  background-color: #bee5eb;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

function Header(props) {
  return <HeaderStyled>{props.children}</HeaderStyled>;
}

export default Header;
