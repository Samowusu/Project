import React from "react";
import CheckIcon from "../../../assets/svgs/CheckIcon";
import Container from "../containers/FlexContainer";
import Typography from "../typography/Typography";

function Status({ status }) {
  return (
    <Container
      style={{
        width: "75%",
        backgroundColor: "#6CDA88",
        borderRadius: "40px",
        paddingTop: "6.74px",
        paddingBottom: "6.74px",
        justifyContent: "space-evenly",
        paddingLeft: "10.4px",
        marginBottom: "10px",
      }}
    >
      <CheckIcon />
      <Typography
        fontSize={"s"}
        fontWeight="bolder"
        color="#070928"
        textAlign={"start"}
      >
        {status}
      </Typography>
    </Container>
  );
}

export default Status;
