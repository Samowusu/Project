import React from "react";
import CheckIcon from "../../assets/svgs/CheckIcon";
import Container from "./Container";
import Typography from "./Typography";

function Status({ status }) {
  return (
    <Container
      style={{
        width: "90%",
        backgroundColor: "#6CDA88",
        borderRadius: "40px",
        paddingTop: "6.74px",
        paddingBottom: "6.74px",
        justifyContent: "space-evenly",
      }}
    >
      <CheckIcon />
      <Typography fontSize={"s"} fontWeight="bolder" color="#070928">
        {status}
      </Typography>
    </Container>
  );
}

export default Status;
