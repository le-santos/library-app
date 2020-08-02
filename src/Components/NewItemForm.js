import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 18rem;
  height: 10rem;
  padding: 3em;
  margin: 1em auto;
  text-align: left;
  background-color: #f1f9fa;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.55);
  position: absolute;
  left: ${(props) => (props.visible ? "10px" : "-500px")};
  bottom: 10px;
  z-index: 4;
  transition: left 0.7s;
`;

function NewItemForm(props) {
  return (
    <Form className="new-item-form" visible={props.visible}>
      {props.children}
    </Form>
  );
}

export default NewItemForm;
