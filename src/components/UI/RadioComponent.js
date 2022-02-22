import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckedRadioIcon from "../../assets/svgs/CheckedRadioIcon";
import UncheckedRadioIcon from "../../assets/svgs/UncheckedRadioIcon";

const RadioIcon = ({ val }) => {
  if (val) {
    return <CheckedRadioIcon />;
  }

  return <UncheckedRadioIcon />;
};

const RadioItem = ({ title, onChange, selected }) => {
  return (
    <RadioContainer onClick={onChange}>
      <RadioIcon val={selected} />
      <RadioText>{title}</RadioText>
    </RadioContainer>
  );
};

const RadioComponent = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  useEffect(() => {
    console.log({ selectedValue });
  }, [selectedValue]);

  const selectHandler = (val) => {
    onChange(val);
    setSelectedValue(val);
  };

  return (
    <RadioList>
      {options.map((item, index) => {
        return (
          <RadioItem
            key={index}
            title={item}
            selected={item === selectedValue}
            onChange={() => selectHandler(item)}
          />
        );
      })}
    </RadioList>
  );
};

const RadioList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const RadioText = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 10px;
`;

export default RadioComponent;
