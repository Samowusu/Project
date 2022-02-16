import React from "react";
import styled from "styled-components";

const RadioButtonComponent = ({ onChange, select, value, title }) => {
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value={value}
          checked={select === `${value}`}
          onChange={onChange}
        />
        <RadioButtonLabel />
        <div>{title}</div>
      </Item>
      {/* <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="optionB"
          checked={select === "optionB"}
          onChange={onChange}
        />
        <RadioButtonLabel />
        <div>Choose Delivery</div>
      </Item> */}
    </Wrapper>
  );
};

export default RadioButtonComponent;

const Wrapper = styled.div`
  height: auto;
  width: 200px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 2px;
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 400;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  /* left: 4px; */
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  border: 1px solid #00778a;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 15px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12x;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: #00778a;
    border: 1px solid #00778a;
  }
  &:checked + ${RadioButtonLabel} {
    background: #00778a;
    border: 1px solid #00778a;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
