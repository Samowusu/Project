import React from "react";
import FooterListItem from "./FooterListItem";
import classes from "./FooterLists.module.css";
import { footerLists } from "../../Data";

function FooterLists() {
  return (
    <div className={classes["footer-lists"]}>
      {footerLists.map((item, index) => (
        <FooterListItem key={index} title={item.title} listItems={item.list} />
      ))}
    </div>
  );
}

export default FooterLists;
