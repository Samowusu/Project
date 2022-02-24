import React from "react";
import ProfileCard from "../../UI/profileCard/ProfileCard";
import Button from "../../UI/button/Button";
import Typography from "../../UI/typography/Typography";
import Container from "../../UI/container/Container";

function Doctors({ doctorsList }) {
  return (
    <Container
      style={{
        flexDirection: "column",
        width: "47%",
        maxWidth: "604px",
      }}
    >
      <Typography fontSize={"xl"} fontWeight="light">
        DOCTORS
      </Typography>
      <Container
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "31px",
          marginTop: "29px",
        }}
      >
        {doctorsList.map((doctor) => (
          <ProfileCard
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
