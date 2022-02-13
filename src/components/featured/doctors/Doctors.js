import React from "react";
import DoctorProfile from "./DoctorProfile";
import Button from "../../UI/Button";
import Text from "../../UI/Text";
import Container from "../../UI/Container";

function Doctors({ doctorsList }) {
  return (
    <Container
      style={{
        flexDirection: "column",
        width: "47%",
        marginTop: "47px",
      }}
    >
      <Text fontSize={"xl"} fontWeight="light">
        DOCTORS
      </Text>
      <Container
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "31px",
          marginTop: "29px",
        }}
      >
        {doctorsList.map((doctor) => (
          <DoctorProfile
            key={doctor.id}
            name={doctor.name}
            address={doctor.address}
            image={doctor.image}
            specialty={doctor.specialty}
          />
        ))}
      </Container>
      <Button color="#fff" backgroundColor=" #00778a" width="11.25rem">
        All Doctors
      </Button>
    </Container>
  );
}

export default Doctors;
