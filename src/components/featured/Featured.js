import React from "react";
import Doctors from "../doctors/Doctors";
import Hospitals from "../hospitals/Hospitals";
import Container from "../UI/Container";
import Text from "../UI/Text";

function Featured({ doctorsList, hospitalsList }) {
  return (
    <Container
      style={{
        paddingTop: "74px",
        paddingBottom: "145px",
        flexDirection: "column",
      }}
    >
      <Text fontSize={"xxl"} fontWeight="bolder" lineHeight={"3rem"}>
        You’re a click away from a <br />
        <a href="#">Doctor</a> or <a href="#">Hospital</a>
      </Text>
      <Container
        style={{
          width: "86%",
          justifyContent: "space-between",
        }}
      >
        <Doctors doctorsList={doctorsList} />
        <Hospitals hospitalsList={hospitalsList} />
      </Container>
    </Container>
  );
}

export default Featured;
