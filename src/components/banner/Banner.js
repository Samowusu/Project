import React from "react";
import classes from "./Banner.module.css";
import Text from "../UI/Text";

function Banner() {
  return (
    <div className={classes.banner}>
      <Text fontSize={"xxl"} fontWeight="bolder" color={"#fff"}>
        Strive2Thrive
      </Text>
      <Text fontSize={"xl"} color="#fff" fontWeight={"light"}>
        Feed your mind to thrive
      </Text>
    </div>
  );
}

export default Banner;
