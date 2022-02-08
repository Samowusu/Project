import React from "react";
import classes from "./PopularSearches.module.css";
import button from "../UI/Button";
import SpecialtyItem from "./specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";

function PopularSearches({ specialtiesList }) {
  return (
    <div className={classes["popular-searches"]}>
      <div className={classes["buttons-container"]}>
        <button className={`${classes.button} ${classes.active}`}>
          Specialties
        </button>
        <button className={classes.button}>Conditions</button>
        <button className={classes.button}>Procedures</button>
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
