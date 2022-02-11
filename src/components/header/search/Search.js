import React from "react";
import classes from "./Search.module.css";
import UserInput from "./UserInput";
import Location from "./Location";
import SearchButton from "./SearchButton";

function Search() {
  return (
    <div className={classes.search}>
      <UserInput />
      <Location />
      <SearchButton />
    </div>
  );
}

export default Search;
