import React from "react";
import Doctors from "./doctors/Doctors";
import Hospitals from "./hospitals/Hospitals";
import Container from "../UI/container/Container";
import Typography from "../UI/typography/Typography";

function Featured({ doctorsList, hospitalsList }) {
  return (
    <Container
      style={{
        paddingTop: "74px",
        paddingBottom: "145px",
        flexDirection: "column",
      }}
    >
      <Typography fontSize={"xxl"} fontWeight="bolder" lineHeight={"3rem"}>
        You’re a click away from a <br />
        <button className="underline">Doctor</button> or{" "}
        <button className="underline">Hospital</button>
      </Typography>
      <Container
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: "47px",
        }}
      >
        <Doctors doctorsList={doctorsList} />
        <div className="vertical-line"></div>
        <Hospitals hospitalsList={hospitalsList} />
      </Container>
    </Container>
  );
}

export default Featured;
