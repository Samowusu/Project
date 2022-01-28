import React from "react";
import classes from "./SearchButton.module.css";
import SearchIcon from "../../assets/svgs/SearchIcon";

function SearchButton() {
  return (
    <button className={classes["search-button"]}>
      <SearchIcon width="20" height="20" color="white" />
    </button>
  );
}

export default SearchButton;
