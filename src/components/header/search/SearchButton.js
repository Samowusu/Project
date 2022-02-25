import React from "react";
import SearchIcon from "../../../assets/svgs/SearchIcon";
import Button from "../../UI/button/Button";

function SearchButton() {
  return (
    <Button
      style={{
        backgroundColor: "#ff7d19",
        borderRadius: "2px",
        width: "3.75rem",
        height: "3.38rem",
      }}
    >
      <SearchIcon width="20" height="20" color="white" />
    </Button>
  );
}

export default SearchButton;
