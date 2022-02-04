import React from "react";
import classes from "./PopularSearches.module.css";
import Button from "../UI/Button";
import SpecialtyItem from "./specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";

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
      <HorizontalScrollbarComponent
        parentClass={classes["options-container"]}
        RenderItemsList={(clickHandler) => {
          return specialtiesList.map((item, index) => (
            <SpecialtyItem
              title={item.title}
              image={item.image}
              key={index}
              onClick={() => clickHandler(() => console.log({ index }))}
            />
          ));
        }}
      />
    </div>
  );
}

export default PopularSearches;
