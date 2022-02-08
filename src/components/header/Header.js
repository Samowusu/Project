import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import Button from "../UI/Button";

function Header() {
  return (
    <div className={classes["header-main"]}>
      <div className={classes["header-container"]}>
        <div className={classes["header-left"]}>
          <img src={logo} alt="MedSearch" />
          <ul>
            <li>Find Hospital</li>
            <li>Find Doctor</li>
            <li>Professional Network</li>
            <li>FAQs</li>
            <li>Strive2Thrive</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={classes["header-right"]}>
          <Button
            width="180 px"
            backgroundColor="rgba(70, 167, 183, 0.2)"
            color="#00778a"
          >
            Join MedSearch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
