import React from "react";
import classes from "./PopularSearches.module.css";
import Button from "../UI/Button";
import SpecialtyItem from "./specialties/SpecialtyItem";

function PopularSearches({ specialtiesList }) {
  return (
    <div className={classes["popular-searches"]}>
      <div className={classes["buttons-container"]}>
        <Button className={`${classes.button} ${classes.active}`}>
          Specialties
        </Button>
        <Button className={classes.button}>Conditions</Button>
        <Button className={classes.button}>Procedures</Button>
      </div>
      <div className={classes["options-container"]}>
        {specialtiesList.map((item) => (
          <SpecialtyItem title={item.title} image={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default PopularSearches;
