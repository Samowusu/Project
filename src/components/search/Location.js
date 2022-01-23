import React from "react";
import classes from "./Location.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Location() {
  return (
    <div className={classes.location}>
      <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icon} />
      <input type="text" placeholder="Location" />
    </div>
  );
}

export default Location;
