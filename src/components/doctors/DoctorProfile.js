import React from "react";
import classes from "./DoctorProfile.module.css";

import doctor from "../../images/doctor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faHeart } from "@fortawesome/free-solid-svg-icons";

function DoctorProfile() {
  return (
    <div className={classes["doctor-profile"]}>
      <div className={classes["doctor-profile__container"]}>
        <img src={doctor} alt="the doctor" />
        <h3>Dr. Arkday Sheinin, MD</h3>
        <p>
          Kingsbrook Jewish Medical Center <br /> 585 Schenectady Ave <br />{" "}
          Tema, GA
        </p>
        <div className={classes["doctor-profile__bottom"]}>
          <span className={classes.icons}>
            <FontAwesomeIcon icon={faCalendarAlt} className={classes.icon} />
            <FontAwesomeIcon icon={faHeart} className={classes.icon} />
          </span>
          <h5>Dentist</h5>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
