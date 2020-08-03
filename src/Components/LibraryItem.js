import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ItemDiv = styled.div`
  padding: 1em;
  border: 1px solid #dee2e6;
  margin: 0.5em;
`;

function LibraryItem(props) {
  return (
    <ItemDiv>
      <h3>{props.title}</h3>
      <p>{`Music: ${props.title}, Composer: ${props.composer}, Style: ${props.style}`}</p>
      <Button
        name={"Remove"}
        color={props.childColor}
        clicked={props.removeClick}
        id={props.itemId}
      ></Button>
    </ItemDiv>
  );
}

export default LibraryItem;
