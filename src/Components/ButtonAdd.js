import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  display: none;
  @media (max-width: 500px) {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 0px 12px;
    text-align: center;
    background-color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
    border-radius: 50%;
    box-shadow: 2px 2px 2px gray;
    color: #f8f8f8;
    text-decoration: bold;
    font-size: 4em;
    transition-duration: 0.3s;
    cursor: pointer;
    outline: currentColor;
    &:hover {
      background-color: #f8f8f8;
      color: ${(props) => props.color};
    }
    &:active {
      box-shadow: 0px 0px 0px 4px;
      transform: scale(1.05, 1.05);
      transition-duration: 0.2s;
    }
  }
`;

function ButtonAdd(props) {
  return (
    <ButtonStyled
      onClick={props.clicked}
      type={props.type}
      color={props.color}
      id={props.id}
    >
      {props.name}
    </ButtonStyled>
  );
}

export default ButtonAdd;
