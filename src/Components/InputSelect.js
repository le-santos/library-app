import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  width: 100%;
  margin: 1em 0;
  outline: none;
`;

function InputSelect(props) {
  const optionListArray = props.options.map((opt, index) => (
    <option key={index}>{opt}</option>
  ));

  return (
    <React.Fragment>
      <label>{props.text}</label>
      <SelectStyled
        onChange={props.changed}
        value={props.value}
        id={props.id}
        required
      >
        {optionListArray}
      </SelectStyled>
    </React.Fragment>
  );
}

export default InputSelect;
