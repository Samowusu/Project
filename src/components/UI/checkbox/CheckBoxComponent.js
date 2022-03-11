import React, { useState } from "react";
import Typography from "../typography/Typography";
import Button from "../button/Button";

import CheckedBox from "../../../assets/svgs/CheckedBox";
import UncheckedBox from "../../../assets/svgs/UncheckedBox";

import {
  RadioContainer,
  RadioList,
  HeaderContainer,
  Card,
} from "../radio/RadioComponent";

const BoxIcon = ({ val }) => {
  if (val) {
    return <CheckedBox />;
  }

  return <UncheckedBox />;
};

const BoxItem = ({ title }) => {
  const [checkedState, setCheckedState] = useState(false);

  const checkBoxHandler = () => {
    setCheckedState((prevState) => !prevState);
  };

  return (
    <RadioContainer onClick={checkBoxHandler}>
      <BoxIcon val={checkedState} />
      <Typography
        fontSize="m"
        fontWeight="regular"
        marginLeft={"10px"}
        textAlign="start"
      >
        {title}
      </Typography>
    </RadioContainer>
  );
};

const CheckBoxComponent = ({ options, header }) => {
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
          return <BoxItem key={index} title={item} />;
        })}
      </RadioList>
      <Typography
        fontSize={"m"}
        fontWeight="light"
        color={"#00778A"}
        textAlign="start"
        marginTop="19px"
      >
        View More
      </Typography>
    </Card>
  );
};

export default CheckBoxComponent;
