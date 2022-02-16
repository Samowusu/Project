import React from "react";
import UserInput from "./UserInput";
import Location from "./Location";
import SearchButton from "./SearchButton";
import SearchComponent from "./Search-styles";

function Search({ width }) {
  return (
    <SearchComponent width={width}>
      <UserInput />
      <Location />
      <SearchButton />
    </SearchComponent>
  );
}

export default Search;
