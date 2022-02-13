import React from "react";
import classes from "./PopularSearches.module.css";
import Button from "../UI/Button";
import SpecialtyItem from "./specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";
import Container from "../UI/Container";
import Text from "../UI/Text";

function PopularSearches({ specialtiesList }) {
  return (
    <Container
      style={{
        marginTop: "87px",
        marginBottom: "87px",
        justifyContent: "flex-end",
      }}
    >
      <Container
        style={{
          width: "92%",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text fontSize={"xxl"} fontWeight="bolder" marginBottom={"49px"}>
          Popular Searches on MedSearch
        </Text>
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
        <Button style={{ marginLeft: "12.5rem", marginTop: "49px" }}>
          View More Specialties
        </Button>
      </Container>
    </Container>
  );
}

export default PopularSearches;
