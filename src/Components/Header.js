import React, { PureComponent } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: block;
  text-align: center;
  padding: 0.75rem 1.1rem;
  color: #e8dfd8;
  background-color: #0c5460;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

class Header extends PureComponent {
  render() {
    return <HeaderStyled>{this.props.children}</HeaderStyled>;
  }
}

export default Header;
