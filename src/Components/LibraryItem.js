import React, { useState, useEffect } from "react";
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
  background-color: #e8dfd8;
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

const titleStyle = { gridArea: "title" },
  textStyle = { gridArea: "text" },
  removeStyle = { gridArea: "delete" },
  infoStyle = { gridArea: "info" },
  linkStyle = { gridArea: "link" };

let wikiInfo = { link: "#" };

//function for fetching data from wikipedia
const getData = async (searchTerm) => {
  let url = "https://en.wikipedia.org/w/api.php";

  const params = {
    action: "opensearch",
    search: searchTerm,
    limit: "15",
    namespace: "0",
    format: "json",
  };

  url = url + "?origin=*";

  for (let key in params) {
    url += `&${key}=${params[key]}`;
  }

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      wikiInfo.link = data[3][0];
    })
    .catch((error) => console.log(error));

  console.log(wikiInfo.link);
  return wikiInfo.link;
};

//Lib Item Functional Component
function LibraryItem(props) {
  const [infoState, setInfoState] = useState({ visibility: false });

  const toggleInfoState = () => {
    setInfoState({ visibility: !infoState.visibility });
  };

  useEffect(() => {
    console.log("Lib item mount or Update");
    getData(props.composer);
  }, [props.composer]);

  const infoLink = infoState.visibility ? (
    <a href={wikiInfo.link} id={`wikiSearch-${props.itemId}`} style={linkStyle}>
      Wikipedia: {props.composer}
    </a>
  ) : null;

  const infoButtonText = infoState.visibility
    ? "Hide Composer Info"
    : "Show Composer Info";

  return (
    <ItemDiv>
      <h3 style={titleStyle}>{props.title}</h3>
      <p style={textStyle}>
        <b>{"Composer: "}</b>
        {props.composer},<b>{" Style: "}</b>
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
        name={infoButtonText}
        color={"#0c5460"}
        id={`btn-info-${props.itemId}`}
        style={infoStyle}
        clicked={toggleInfoState}
      ></Button>
      {infoLink}
    </ItemDiv>
  );
}

export default LibraryItem;
