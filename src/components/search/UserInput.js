import React from "react";
import classes from "./UserInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function UserInput() {
  return (
    <div className={classes["user-input"]}>
      <FontAwesomeIcon icon={faSearch} className={classes.icon} />
      <input
        type="text"
        placeholder="Specialist, hospital, procedure, condi..."
      />
    </div>
  );
}

export default UserInput;
