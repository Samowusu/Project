import React from "react";
import classes from "./Hospitals.module.css";
import DoctorProfile from "../doctors/DoctorProfile";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Hospitals({ hospitalsList }) {
  return (
    <Card
      button={
        <Button color="#fff" backgroundColor=" #00778a" width="11.25rem">
          All Hospitals
        </Button>
      }
    >
      {hospitalsList.map((hospital) => (
        <DoctorProfile
          key={hospital.id}
          name={hospital.name}
          address={hospital.address}
          image={hospital.image}
        />
      ))}
    </Card>
  );
}

export default Hospitals;
