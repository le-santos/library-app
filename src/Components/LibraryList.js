import React from "react";
import LibraryItem from "./LibraryItem";

const LibraryList = (props) => {
  return props.libraryList.map((item) => (
    <LibraryItem
      title={item.title}
      composer={item.composer}
      style={item.style}
      key={item.id}
      childColor={"#dc3545"}
      removeClick={props.removeLibraryItem}
      itemId={item.id}
    />
  ));
};

export default LibraryList;
