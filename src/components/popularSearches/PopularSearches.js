import React from "react";
import classes from "./PopularSearches.module.css";
import Button from "../UI/Button";
import SpecialtyItem from "./specialties/SpecialtyItem";

function PopularSearches({ specialtiesList }) {
  const scrollHandler = (event) => {
    console.log({ event });
    const container = document.getElementById("wrapper");
    const containerScrollPosition = container.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: "smooth", //if you want smooth scrolling
    });
  };

  return (
    <div className={classes["popular-searches"]}>
      <div className={classes["buttons-container"]}>
        <Button className={`${classes.button} ${classes.active}`}>
          Specialties
        </Button>
        <Button className={classes.button}>Conditions</Button>
        <Button className={classes.button}>Procedures</Button>
      </div>
      <div
        className={classes["options-container"]}
        id="wrapper"
        onWheel={scrollHandler}
      >
        {specialtiesList.map((item) => (
          <SpecialtyItem title={item.title} image={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default PopularSearches;
