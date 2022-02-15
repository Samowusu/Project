import React from "react";
import classes from "./Header.module.css";
import NavBar from "./navigation/NavBar";
import Search from "./search/Search";
import Typography from "../UI/Typography";

function Header() {
  return (
    <div className={classes["header"]}>
      <NavBar />
      <div className={classes["header-bottom"]}>
        <div className={classes["text-container"]}>
          <Typography
            fontSize={"xxxl"}
            fontWeight="bolder"
            color={"#fff"}
            textAlign="start"
          >
            No wahala, search for a <br /> doctor near you
          </Typography>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Header;
