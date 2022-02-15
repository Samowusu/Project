import React from "react";
import classes from "./SpecialtyItem.module.css";
import skin from "../../../assets/images/item.png";
import Typography from "../../UI/Typography";

SpecialtyItem.defaultProps = { title: "Dermatology", image: skin };

function SpecialtyItem({ title, image, onClick }) {
  return (
    <div className={classes["specialty-item"]} onClick={() => onClick()}>
      <img src={image} alt="skin" />
      <Typography fontSize={"l"} fontWeight="bolder">
        {title}
      </Typography>
    </div>
  );
}

export default SpecialtyItem;
