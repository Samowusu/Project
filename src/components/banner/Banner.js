import React from "react";
import classes from "./Banner.module.css";
import Typography from "../UI/typography/Typography";

function Banner() {
  return (
    <div className={classes.banner}>
      <Typography fontSize={"xxl"} fontWeight="bolder" color={"#fff"}>
        Strive2Thrive
      </Typography>
      <Typography fontSize={"xl"} color="#fff" fontWeight={"light"}>
        Feed your mind to thrive
      </Typography>
    </div>
  );
}

export default Banner;
