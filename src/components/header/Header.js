import React from "react";
import header from "../../assets/images/header.png";
import NavBar from "./navigation/NavBar";
import Search from "./search/Search";
import Typography from "../UI/typography/Typography";
import Container from "../UI/container/Container";
import HeaderBottom from "./Header-styles";

function Header() {
  return (
    <Container style={{ flexDirection: "column" }}>
      <NavBar />
      <HeaderBottom
        img={header}
        paddingTop="12.94rem"
        paddingBottom="16.25rem"
        paddingLeft={"3.5rem"}
      >
        <Typography
          fontSize={"xxxl"}
          fontWeight="bolder"
          color={"#fff"}
          textAlign="start"
          marginBottom={"2.69rem"}
        >
          No wahala, search for a <br /> doctor near you
        </Typography>
        <Search width={"40.69rem"} />
      </HeaderBottom>
    </Container>
  );
}

export default Header;
