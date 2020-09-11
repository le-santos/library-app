import React from "react";
import InputSelect from "./InputSelect";

function ListHeader(props) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 150px" }}>
      <h2 style={{ margin: "1em" }}>Library List</h2>
      <fieldset style={{ border: "none", padding: "1em", fontSize: "0.9em" }}>
        <InputSelect
          text={"Sort list by: "}
          options={props.orderOptions}
          id={"list-sort"}
          changed={props.orderChanged}
        />
      </fieldset>
    </div>
  );
}

export default ListHeader;
