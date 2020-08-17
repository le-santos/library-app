import React from "react";
import styled from "styled-components";

const BtnStyled = styled.button`
  padding: 0.5em;
  margin: 4px 2px;
  text-align: center;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 5px;
  color: #f8f8f8;
  text-decoration: none;
  font-size: 1em;
  transition-duration: 0.3s;
  cursor: pointer;
  outline: currentColor;
  &:hover {
    background-color: #e8dfd8;
    color: ${(props) => props.color};
  }
  &:active {
    box-shadow: 0px 0px 0px 4px;
    transform: scale(1.05, 1.05);
    transition-duration: 0.2s;
  }
`;

function Button(props) {
  return (
    <BtnStyled
      onClick={props.clicked}
      type={props.type}
      color={props.color}
      id={props.id}
    >
      {props.name}
    </BtnStyled>
  );
}

export default Button;
