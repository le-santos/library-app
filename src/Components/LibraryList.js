import React from "react";
import LibraryItem from "./LibraryItem";

const LibraryList = (props) => {
  
  const respLink = {link: "#"};
  
  const getData = (searchTerm) => {  
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

    setTimeout( () =>{
      console.log(respLink.link)},500);
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
        requestData={() => getData(item.composer)}
        linkRef={respLink.link}
      />
    ))
  )    
}

export default LibraryList;
