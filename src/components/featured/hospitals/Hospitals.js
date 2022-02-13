import React from "react";
import classes from "./Hospitals.module.css";
import DoctorProfile from "../doctors/DoctorProfile";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Text from "../../UI/Text";

function Hospitals({ hospitalsList }) {
  return (
    <Container
      style={{
        flexDirection: "column",
        width: "47%",
        marginTop: "47px",
      }}
    >
      {" "}
      <Text fontSize={"xl"} fontWeight="light">
        HOSPITALS
      </Text>
      <Container
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "31px",
          marginTop: "29px",
        }}
      >
        {hospitalsList.map((hospital) => (
          <DoctorProfile
            key={hospital.id}
            name={hospital.name}
            address={hospital.address}
            image={hospital.image}
          />
        ))}
      </Container>
      <Button color="#fff" backgroundColor=" #00778a" width="11.25rem">
        All Hospitals
      </Button>
    </Container>
  );
}

export default Hospitals;
