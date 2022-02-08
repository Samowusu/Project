import React from "react";
import classes from "./Doctors.module.css";
import DoctorProfile from "./DoctorProfile";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Doctors({ doctorsList }) {
  return (
    <Card
      button={
        <Button color="#fff" backgroundColor=" #00778a" width="11.25rem">
          All Doctors
        </Button>
      }
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
    </Card>
  );
}

export default Doctors;
