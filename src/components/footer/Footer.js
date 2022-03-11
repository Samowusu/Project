import React from "react";
import classes from "./Footer.module.css";
import FooterLists from "./FooterLists";
import footer from "../../assets/images/footer.png";
import FaceBook from "../../assets/svgs/FaceBook";
import Instagram from "../../assets/svgs/Instagram";
import LinkedIn from "../../assets/svgs/LinkedIn";
import YouTube from "../../assets/svgs/YouTube";
import Container from "../UI/containers/FlexContainer";
import Typography from "../UI/typography/Typography";

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
      <Container
        style={{
          width: "90%",
          borderTopWidth: "1px",
          borderTopColor: `rgba(255,255,255, 0.5)`,
          borderTopStyle: "solid",
          paddingTop: "25px",
          paddingBottom: "25px",
          justifyContent: "space-between",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "99px",
        }}
      >
        <Typography color={"#ffffff"} fontSize="m" fontWeight={"regular"}>
          © Copyright 2021 MedHall
        </Typography>
        <Typography color={"#ffffff"} fontSize="m" fontWeight={"regular"}>
          Privacy Policy | Advertising Policy | Policy Preferences | Do Not Sell
          My Personal Information
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
