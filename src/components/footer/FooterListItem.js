import React from "react";
import classes from "./FooterListItem.module.css";
import Typography from "../UI/Typography";

function FooterListItem({ title, listItems }) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography
          fontSize={"m"}
          fontWeight="bold"
          color={"#fff"}
          textAlign="start"
        >
          {title}
        </Typography>
      </div>
      {listItems.map((item, index) => (
        <Typography
          key={index}
          color="#fff"
          fontSize={"m"}
          fontWeight="light"
          textAlign="start"
          marginBottom={"8px"}
        >
          {item}
        </Typography>
      ))}
    </div>
  );
}

export default FooterListItem;
