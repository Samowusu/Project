import React from "react";
import classes from "./PopularSearches.module.css";
import Button from "../UI/Button";
import SpecialtyItem from "./specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";

function PopularSearches({ specialtiesList }) {
  return (
    <div className={classes["popular-searches"]}>
      <div className={classes["buttons-container"]}>
        <Button
          style={{
            color: `#fff`,
            backgroundColor: `#ff7d19`,
            width: `100%`,
            height: `2.6rem`,
            fontSize: `0.88rem`,
            fontWeight: `400`,
            borderRadius: `0`,
          }}
        >
          Specialties
        </Button>
        <Button
          style={{
            color: `#00`,
            backgroundColor: `#fff`,
            width: `100%`,
            height: `2.6rem`,
            fontSize: `0.88rem`,
            fontWeight: `400`,
            borderRadius: `0`,
          }}
        >
          Conditions
        </Button>
        <Button
          style={{
            color: `#00`,
            backgroundColor: `#fff`,
            width: `100%`,
            height: `2.6rem`,
            fontSize: `0.88rem`,
            fontWeight: `400`,
            borderRadius: `0`,
          }}
        >
          Procedures
        </Button>
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
