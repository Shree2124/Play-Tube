import React, { useId } from "react";
import styled from "styled-components";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <InputDiv>
        {label && <label htmlFor={id}>{label}</label>}
        <input {...props} ref={ref} id={id} />
      </InputDiv>
    );
  }
);

const InputDiv = styled.div`
  width: 100%;
  label {
    display: inline-block;
    margin-bottom: 0.25rem;
    padding-left: 0.25rem;
  }
  input {
    padding: 0.25rem 0.75rem;
    border-radius: 1.5rem;
    background-color: white;
    color: black;
    outline: none;
   
    width: 100%;
    &:focus {
      background-color: white;
      transition-duration: 200ms;
      border: 1px solid rgb(229 231 235 / 1);
      
    }
  }
`;

export default Input;
