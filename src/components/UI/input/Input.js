import React from "react";
import styled from "styled-components";

function Input() {
  return (
    <>
      <InputBox id="test" type={"text"} />
    </>
  );
}

export default Input;

const InputBox = styled.InputBox`
  width: 11.13rem;
  height: 2.31rem;
`;
