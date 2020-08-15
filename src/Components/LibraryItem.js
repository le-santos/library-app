import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ItemDiv = styled.div`
  padding: 1em;
  border: 1px solid #dee2e6;
  margin: 0.5em;
  display: grid;
  grid-template-areas: 
    "title text delete"
    "info link link";
  place-items: center start;
  gap: 10px;
  box-shadow: 1px 2px 4px;
  @media (max-width: 500px) {
      display: grid;
      grid-template-areas:
        "title delete"
        "text text"
        "info link ";
      place-items: center start;
      gap: 10px;
  }
`;

const titleStyle = {"gridArea": "title"},
  textStyle = {"gridArea": "text"},
  removeStyle = {"gridArea": "delete"},
  infoStyle = {"gridArea": "info"},
  linkStyle = {"gridArea": "link", "display": "none"};

function LibraryItem(props) {
  return (
    <ItemDiv>
      <h3 style={titleStyle}>{props.title}</h3>
      <p style={textStyle}><b>{"Composer: "}</b>
        {props.composer},
        <b>{" Style: "}</b>
        {props.style}
      </p>
      <Button
        name={"Remove"}
        color={props.childColor}
        clicked={props.removeClick}
        id={props.itemId}
        style={removeStyle}
      ></Button>
      <Button 
        name={"Check Composer Info >>"} 
        color={"#0c5460"} 
        id={`btn-info-${props.itemId}`}
        style={infoStyle}
        clicked={props.toggleInfo}
      ></Button>
      <a 
        href={props.linkRef} 
        id={`wikilink-${props.itemId}`}
        style={linkStyle}
      >
        Wikipedia: {props.composer}
      </a>
    </ItemDiv>
  );
}

export default LibraryItem;
