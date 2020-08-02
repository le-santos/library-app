import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  float: right;
  width: 77%;
  text-align: left;
`;

function MainArea(props) {
  return <MainDiv>{props.children}</MainDiv>;
}

export default MainArea;
