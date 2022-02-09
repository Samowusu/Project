import React from "react";
import classes from "./Banner.module.css";
import Typography from "../UI/Typography";

function Banner() {
  return (
    <div className={classes.banner}>
      <Typography variant={`xxl`} color="secondary">
        Strive2Thrive
      </Typography>
      <Typography variant={`xl`} color="secondary">
        Feed your mind to thrive
      </Typography>
    </div>
  );
}

export default Banner;
