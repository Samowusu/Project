import React from "react";
import Typography from "../components/UI/typography/Typography";
import FlexContainer from "../components/UI/containers/FlexContainer";

function Error() {
  return (
    <FlexContainer style={{ justifyContent: "center", paddingTop: "50vh" }}>
      <Typography fontSize={"xxxl"} fontWeight="bolder" color={"red"}>
        Ooopss...No Page Found. Please Enter a Valid Link
      </Typography>
    </FlexContainer>
  );
}

export default Error;
