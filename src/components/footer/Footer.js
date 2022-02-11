import React from "react";
import classes from "./Footer.module.css";
import FooterLists from "./FooterLists";
import footer from "../../assets/images/footer.png";
import FaceBook from "../../assets/svgs/FaceBook";
import Instagram from "../../assets/svgs/Instagram";
import LinkedIn from "../../assets/svgs/LinkedIn";
import YouTube from "../../assets/svgs/YouTube";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src={footer} alt="" />
          <div className={classes.socials}>
            <FaceBook />
            <Instagram />
            <LinkedIn />
            <YouTube />
          </div>
        </div>
        <FooterLists />
      </div>
    </div>
  );
}

export default Footer;
