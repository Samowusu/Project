import React from "react";
import classes from "./SpecialtyItem.module.css";
import skin from "../../../assets/images/item.png";
import Text from "../../UI/Text";

SpecialtyItem.defaultProps = { title: "Dermatology", image: skin };

function SpecialtyItem({ title, image, onClick }) {
  return (
    <div className={classes["specialty-item"]} onClick={() => onClick()}>
      <img src={image} alt="skin" />
      <Text fontSize={"l"} fontWeight="bolder">
        {title}
      </Text>
    </div>
  );
}

export default SpecialtyItem;
