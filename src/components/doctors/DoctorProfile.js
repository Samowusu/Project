import React from "react";
import classes from "./DoctorProfile.module.css";

import doctor from "../../assets/images/doctor.png";

import CalendarIcon from "../../assets/svgs/CalendarIcon";
import HeartIcon from "../../assets/svgs/HeartIcon";
import VerifiedIcon from "../../assets/svgs/VerifiedIcon";
import TextComponent from "../UI/Text";
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
        <div className={classes.text}>
          <TextComponent fontSize={"m"} fontWeight="bolder" textAlign={"start"}>
            {name}
          </TextComponent>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.address}>
            <TextComponent
              fontSize={"s"}
              fontWeight="regular"
              lineHeight={"0.81rem"}
              textAlign="start"
            >
              {hospitalName ?? null}
              {hospitalName ? <br /> : null}
              {streetName ?? null}
              {streetName ? <br /> : null}
              {province}
            </TextComponent>
          </div>
          <div className={classes["doctor-profile__bottom"]}>
            <span className={classes.icons}>
              <CalendarIcon />
              <HeartIcon className={classes.icon} />
            </span>
            <TextComponent fontSize={"s"} fontWeight="bolder">
              {specialty}
            </TextComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
