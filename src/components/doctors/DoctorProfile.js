import React from "react";
import classes from "./DoctorProfile.module.css";

import doctor from "../../assets/images/doctor.png";

import CalendarIcon from "../../assets/svgs/CalendarIcon";
import HeartIcon from "../../assets/svgs/HeartIcon";
import VerifiedIcon from "../../assets/svgs/VerifiedIcon";
DoctorProfile.defaultProps = {
  name: "Dr. Arkday Sheinin, MD",
  address: {
    streetName: "",
    hospitalName: "",
    province: "",
  },
  image: doctor,
  id: "A1",
  specialty: "",
};

function DoctorProfile({
  name,
  address: { streetName, hospitalName, province },
  image,
  id,
  specialty,
}) {
  return (
    <div className={classes["doctor-profile"]}>
      <div className={classes["doctor-profile__container"]}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        >
          <VerifiedIcon className={classes.icon} />
        </div>
        <h3>{name}</h3>
        <div className={classes.address}>
          <p>
            {hospitalName ?? null}
            {hospitalName ? <br /> : null}
            {streetName ?? null}
            {streetName ? <br /> : null}
            {province}
          </p>
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
