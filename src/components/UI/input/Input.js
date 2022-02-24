import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <label>Input</label>
      <InputBox $styles={props.style} ref={ref} />
    </>
  );
});

export default Input;

const InputBox = styled.input`
  width: ${(props) => props.$styles.width};
`;
