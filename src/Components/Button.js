import React from "react";
import styled from "styled-components";

const BtnStyled = styled.button`
  padding: 10px;
  margin: 4px 2px;
  text-align: center;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${(props) => props.color};
  }
`;

function Button(props) {
  return (
    <BtnStyled onClick={props.clicked} type={props.type} color={props.color}>
      {props.name}
    </BtnStyled>
  );
}

export default Button;
