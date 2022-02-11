import React from "react";
import classes from "./UserInput.module.css";
import BlackSearchIcon from "../../../assets/svgs/BlackSearchIcon";

function UserInput() {
  return (
    <div className={classes["user-input"]}>
      <BlackSearchIcon />
      <input
        type="text"
        placeholder="Specialist, hospital, procedure, condi..."
      />
    </div>
  );
}

export default UserInput;
