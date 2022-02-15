import React from "react";
import classes from "./ProfileCard.module.css";

import doctor from "../../assets/images/doctor.png";

import CalendarIcon from "../../assets/svgs/CalendarIcon";
import HeartIcon from "../../assets/svgs/HeartIcon";
import VerifiedIcon from "../../assets/svgs/VerifiedIcon";
import Typography from "./Typography";
ProfileCard.defaultProps = {
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

function ProfileCard({
  name,
  address: { streetName, hospitalName, province },
  image,
  id,
  specialty,
}) {
  return (
    <div className={classes["profile-card"]}>
      <div className={classes["profile-card__container"]}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        >
          <VerifiedIcon className={classes.icon} />
        </div>
        <div className={classes.text}>
          <Typography fontSize={"m"} fontWeight="bolder" textAlign={"start"}>
            {name}
          </Typography>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.address}>
            <Typography
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
            </Typography>
          </div>
          <div className={classes["profile-card__bottom"]}>
            <span className={classes.icons}>
              <CalendarIcon />
              <HeartIcon className={classes.icon} />
            </span>
            <Typography fontSize={"s"} fontWeight="bolder">
              {specialty}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
