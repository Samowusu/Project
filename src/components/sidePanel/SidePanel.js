import React, { useState, useEffect } from "react";
import Container from "../UI/containers/FlexContainer";
import Insurance from "../UI/insurance/Insurance";
import RadioComponent from "../UI/radio/RadioComponent";
import CheckBoxComponent from "../UI/checkbox/CheckBoxComponent";

const SORT_OPTIONS = ["Most Relevant", "Closest", "Highest Rated"];

const DISTANCE_OPTIONS = ["100km", "200km", "300km", "Near Me", "National"];

const CHECK_OPTIONS = [
  "Pediatrics",
  "Pediatrics Medicine",
  "Family Medicine",
  "Internal Medicine",
  "Allergy & Immunology",
  "General Medical Practice",
];

function SidePanel() {
  const [sortState, setSortState] = useState(SORT_OPTIONS[0]);
  const [distanceState, setDistanceState] = useState(DISTANCE_OPTIONS[0]);

  useEffect(() => {
    console.log({ sortState, distanceState });
  }, [sortState, distanceState]);

  const handleSortChange = (val) => {
    setSortState(val);
  };

  const handleDistanceChange = (val) => {
    setDistanceState(val);
  };

  return (
    <Container
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "19%",
      }}
    >
      <Insurance />
      <RadioComponent
        options={SORT_OPTIONS}
        onChange={(val) => handleSortChange(val)}
        header="Sort"
      />
      <RadioComponent
        options={DISTANCE_OPTIONS}
        onChange={(val) => handleDistanceChange(val)}
        header="Distance"
      />
      <CheckBoxComponent header={"Specialist"} options={CHECK_OPTIONS} />
    </Container>
  );
}

export default SidePanel;
