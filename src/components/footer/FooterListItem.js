import React from "react";
import classes from "./FooterListItem.module.css";
import Text from "../UI/Text";

function FooterListItem({ title, listItems }) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Text fontSize={"m"} fontWeight="bold" color={"#fff"} textAlign="start">
          {title}
        </Text>
      </div>
      {listItems.map((item, index) => (
        <Text
          key={index}
          color="#fff"
          fontSize={"m"}
          fontWeight="light"
          textAlign="start"
          marginBottom={"8px"}
        >
          {item}
        </Text>
      ))}
    </div>
  );
}

export default FooterListItem;
