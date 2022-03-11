import React from "react";
import classes from "./ProfileCard.module.css";
import styled from "styled-components";
import doctor from "../../../assets/images/doctor.png";

import CalendarIcon from "../../../assets/svgs/CalendarIcon";
import HeartIcon from "../../../assets/svgs/HeartIcon";
import VerifiedIcon from "../../../assets/svgs/VerifiedIcon";
import Typography from "../typography/Typography";
import Status from "../status/Status";

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
  isVerified: true,
  hasStatus: true,
};

function ProfileCard({
  name,
  address: { streetName, hospitalName, province },
  image,
  id,
  specialty,
  isVerified,
  hasStatus,
}) {
  return (
    <ProfileCardContainer>
      <div className={classes["profile-card__container"]}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        >
          {hasStatus && <Status status={"Accepting new patients"} />}
        </div>
        <div className={classes["text-icon__container"]}>
          <div className={classes.text}>
            <Typography fontSize={"m"} fontWeight="bolder" textAlign={"start"}>
              {name}
            </Typography>
          </div>
          <div className={classes.icon}>
            {isVerified ? <VerifiedIcon /> : ""}
          </div>
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
    </ProfileCardContainer>
  );
}

export default ProfileCard;

const ProfileCardContainer = styled.div`
  display: flex;
  padding: 14px;
  /* width: 181.99px; */
  /* width: 210px; */
  /* width: clamp(181.99px, 18%, 262px); */
  min-width: 181.99px;
  width: 18%;
  box-shadow: 0px 9px 21px rgb(70 167 183 / 6%);
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;
