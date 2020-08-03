import React from "react";
import styled from "styled-components";

const InputTextStyled = styled.input`
  display: block;
  width: 100%;
  margin: 1em 0;
  outline: none;
`;

function InputText(props) {
  return (
    <div>
      <label className={"text-input"}>{props.text}</label>
      <InputTextStyled
        onChange={props.changed}
        value={props.value}
        id={props.id}
        required
      ></InputTextStyled>
    </div>
  );
}

export default InputText;
