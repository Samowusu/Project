import React from "react";
import classes from "./Card.module.css";

function Card({ children, button }) {
  return (
    <div className={classes["card"]}>
      <div className={classes["items-wrapper"]}>{children}</div>
      {button}
    </div>
  );
}

export default Card;
