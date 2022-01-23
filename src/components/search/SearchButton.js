import React from "react";
import classes from "./SearchButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchButton() {
  return (
    <button className={classes["search-button"]}>
      <FontAwesomeIcon icon={faSearch} className={classes.icon} />
    </button>
  );
}

export default SearchButton;
