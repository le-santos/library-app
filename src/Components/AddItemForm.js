import React, {useEffect} from "react";
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
  position: absolute;
  left: ${(props) => (props.visible ? "10px" : "-500px")};
  bottom: 10px;
  z-index: 4;
  transition: left 0.7s;
`;

function AddItemForm(props) {

  const textInputs = (props.textInputs).map( (el, index) =>
   <InputText 
      text={el} 
      key={`${el}-input`} 
      id={el}
      changed={props.changed}
      value={props.textValues[index]} /> 
     );
  
  const selectInput = <InputSelect 
    text={props.selectLabel}
    options={props.selectInput}
    changed={props.changed}
    value={props.selectValue}
    id={props.selectLabel}
    />
  
  useEffect( () => console.log(props.textValues, props.selectValue))

  return (
    <Form className="new-item-form" visible={props.visible}>
      {textInputs}
      {selectInput}
      <Button
        name={"Add music"}
        clicked={props.clickSubmit}
        color={"#008cba"}
      />
      <Button
        name={"Cancel"}
        type={"reset"}
        color={"#dc3545"}
        clicked={props.clickCancel}
      />
    </Form>
  );
}

export default AddItemForm;
