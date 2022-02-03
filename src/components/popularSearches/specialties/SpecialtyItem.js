import React from "react";
import classes from "./SpecialtyItem.module.css";
import skin from "../../../assets/images/item.png";

SpecialtyItem.defaultProps = { title: "Dermatology", image: skin };

function SpecialtyItem({ title, image, onClick}) {
  return (
    <div className={classes["specialty-item"]} onClick={() => onClick()} >
      <img src={image} alt="skin" />
      <h3>{title}</h3>
    </div>
  );
}

export default SpecialtyItem;
