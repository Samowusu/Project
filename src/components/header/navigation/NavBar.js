import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../../assets/images/logo.png";
import Button from "../../UI/button/Button";

function NavBar() {
  return (
    <div className={classes["navBar-main"]}>
      <div className={classes["navBar-container"]}>
        <div className={classes["navBar-left"]}>
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
        <div className={classes["navBar-right"]}>
          <Button
            style={{
              width: "11.25rem",
              backgroundColor: "rgba(70, 167, 183, 0.2)",
              color: "00778a",
              height: "3rem",
            }}
          >
            Join MedSearch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
