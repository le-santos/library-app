import React from "react";
import LibraryItem from "./LibraryItem";

const LibraryList = (props) => {
  
  
  const getData = (searchTerm) => {
    const respLink = {link: "#"};  
    let url = "https://en.wikipedia.org/w/api.php";

    const params = {
      action: "opensearch",
      search: searchTerm,
      limit: "15",
      namespace: "0",
      format: "json"
    };
    
    url = url + "?origin=*";

    for (let key in params) {
      url += `&${key}=${params[key]}`
    }
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {respLink.link = data[3][0]})
      .catch((error) => console.log(error));

      console.log(respLink.link)

    return respLink.link
;
  }

  return ( 
    props.libraryList.map((item) => (
      <LibraryItem
        title={item.title}
        composer={item.composer}
        style={item.style}
        key={item.id}
        childColor={"#dc3545"}
        removeClick={item.removeLibraryItem}
        itemId={item.id}
        // toggleInfo={}
        linkRef={getData(item.composer)}
      />
    ))
  )    
}

export default LibraryList;
