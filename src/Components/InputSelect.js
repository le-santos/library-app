import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  display: block;
  width: 100%;
  margin: 0.4em 0;
  outline: none;
`;

function InputSelect(props) {
  const optionListArray = props.options.map((opt, index) => (
    <option key={index}>{opt}</option>
  ));

  return (
    <div>
      <label>{props.text}</label>
      <SelectStyled
        onChange={props.changed}
        value={props.value}
        id={props.id}
        required
      >
        {optionListArray}
      </SelectStyled>
    </div>
  );
}

export default InputSelect;
