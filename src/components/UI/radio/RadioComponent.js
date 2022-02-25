import React, { useState } from "react";
import styled from "styled-components";
import CheckedRadioIcon from "../../../assets/svgs/CheckedRadioIcon";
import UncheckedRadioIcon from "../../../assets/svgs/UncheckedRadioIcon";
import Button from "../button/Button";
import Typography from "../typography/Typography";

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
      <Typography
        fontSize="l"
        fontWeight="regular"
        marginLeft={"10px"}
        textAlign="start"
      >
        {title}
      </Typography>
    </RadioContainer>
  );
};

const RadioComponent = ({ options, onChange, header }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const selectHandler = (val) => {
    onChange(val);
    setSelectedValue(val);
  };

  return (
    <Card>
      <HeaderContainer>
        <Typography fontSize={"standard"} fontWeight="bold">
          {header}
        </Typography>
        <Button
          style={{
            width: "2.94rem",
            height: "1.13rem",
            backgroundColor: "#F8F9FC",
            color: "#818181",
            fontSize: "0.63rem",
            fontWeight: "400",
          }}
        >
          Clear
        </Button>
      </HeaderContainer>
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
    </Card>
  );
};

export const Card = styled.div`
  width: 223px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 23px 0 23px 23px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
  margin-right: 23px;
`;

export const RadioList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

export default RadioComponent;
