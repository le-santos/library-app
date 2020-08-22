import React, { useEffect } from "react";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
  width: 14rem;
  height: 13rem;
  padding: 3em;
  margin: 1em auto;
  text-align: left;
  background-color: #f1f9fa;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.55);
  border-radius: 6px;
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.7s;
`;

function AddItemForm(props) {
  useEffect(() => {
    document.querySelector(".new-item-form").style.opacity = "1";
  });

  const textInputs = props.textInputs.map((el, index) => (
    <InputText
      text={el}
      key={`${el}-input`}
      id={el}
      changed={props.changed}
      value={props.textValues[index]}
    />
  ));

  const selectInput = (
    <InputSelect
      text={props.selectLabel}
      options={props.selectInput}
      changed={props.changed}
      value={props.selectValue}
      id={props.selectLabel}
    />
  );

  return (
    <Form className="new-item-form" visible={props.visible}>
      {textInputs}
      {selectInput}
      <Button
        name={"Add music"}
        clicked={props.clickSubmit}
        color={"#0c5460"}
        hoverColor={"#f1f9fa"}
      />
      <Button
        name={"Cancel"}
        type={"reset"}
        color={"#dc3545"}
        hoverColor={"#f1f9fa"}
        clicked={props.clickCancel}
      />
    </Form>
  );
}

export default AddItemForm;
