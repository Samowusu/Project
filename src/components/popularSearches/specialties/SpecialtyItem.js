import React from "react";
import classes from "./SpecialtyItem.module.css";
import skin from "../../../images/Skin.png";

function SpecialtyItem() {
  return (
    <div className={classes["specialty-item"]}>
      <img src={skin} alt="skin" />
      <h3>Dermatology</h3>
    </div>
  );
}

export default SpecialtyItem;
