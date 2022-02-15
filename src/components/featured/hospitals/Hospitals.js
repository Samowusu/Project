import React from "react";
import ProfileCard from "../../UI/ProfileCard";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Typography from "../../UI/Typography";

function Hospitals({ hospitalsList }) {
  return (
    <Container
      style={{
        flexDirection: "column",
        width: "47%",
      }}
    >
      {" "}
      <Typography fontSize={"xl"} fontWeight="light">
        HOSPITALS
      </Typography>
      <Container
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "31px",
          marginTop: "29px",
        }}
      >
        {hospitalsList.map((hospital) => (
          <ProfileCard
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
