import React from "react";
import classes from "./DoctorProfile.module.css";

import doctor from "../../assets/images/doctor.png";

import CalendarIcon from "../../assets/svgs/CalendarIcon";
import HeartIcon from "../../assets/svgs/HeartIcon";

DoctorProfile.defaultProps = {
  name: "Dr. Arkday Sheinin, MD",
  address: "Kingsbrook Jewish Medical Center 585 Schenectady AveTema, GA",
  image: doctor,
  id: "A1",
  specialty: "Dentist",
};

function DoctorProfile({ name, address, image, id, specialty }) {
  return (
    <div className={classes["doctor-profile"]}>
      <div className={classes["doctor-profile__container"]}>
        <img src={image} alt="the doctor" />
        <h3>{name}</h3>
        <div className={classes.address}>
          <p>{address}</p>
        </div>
        <div className={classes["doctor-profile__bottom"]}>
          <span className={classes.icons}>
            <CalendarIcon />
            <HeartIcon className={classes.icon} />
          </span>
          <h5>{specialty}</h5>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
