import React from "react";
import classes from "./Location.module.css";
import LocationIcon from "../../assets/svgs/LocationIcon";

function Location() {
  return (
    <div className={classes.location}>
      <LocationIcon />
      <input type="text" placeholder="Location" />
    </div>
  );
}

export default Location;
