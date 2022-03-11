import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import logo from "../../../assets/images/logo.png";
import Button from "../../UI/button/Button";

function NavBar() {
  // const navLinkStyle = ({ isActive }) => {
  //   console.log({ isActive });
  //   return {
  //     textDecoration: isActive ? "underline" : "none",
  //   };
  // };

  return (
    <div className={classes["navBar-main"]}>
      <div className={classes["navBar-container"]}>
        <div className={classes["navBar-left"]}>
          <img src={logo} alt="MedSearch" />
          <nav>
            <NavLink to={"/home"}>Find Hospital</NavLink>
            <NavLink to={"/doctors"}>Find Doctor</NavLink>
            {/* <NavLink to={"/professionalNetwork"}>Professional Network</NavLink>
            <NavLink to={"/FAQS"}>FAQs</NavLink>
            <NavLink to={"/strive2thrive"}> Strive2Thrive</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink> */}
          </nav>
        </div>
        <div className={classes["navBar-right"]}>
          <Button
            style={{
              width: "11.25rem",
              backgroundColor: "rgba(70, 167, 183, 0.2)",
              color: "#00778a",
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
