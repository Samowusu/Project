import React, { useState } from "react";
import Container from "../UI/containers/FlexContainer";
import SwitchButton from "../UI/switchButton/SwitchButton";
import Typography from "../UI/typography/Typography";
import HeaderBottom from "./Header-styles";
import NavBar from "./navigation/NavBar";
import Search from "./search/Search";

function Header({ backgroundImage }) {
  const [checkedState, setCheckedState] = useState(false);

  const switchChangeHandler = (nextChecked) => {
    setCheckedState(nextChecked);
  };

  return (
    <Container style={{ flexDirection: "column" }}>
      <NavBar />
      <HeaderBottom
        img={backgroundImage}
        paddingTop={"3.75rem"}
        paddingBottom={"2.5rem"}
        paddingLeft={"2.19rem"}
        paddingRight={"2.19rem"}
      >
        <Search />
        <Container style={{ justifyContent: "flex-end", marginTop: "6.88rem" }}>
          <Typography
            marginRight={"1.31rem"}
            color="#ffffff"
            fontSize={"standard"}
            fontWeight="regular"
          >
            Map View
          </Typography>
          <SwitchButton value={checkedState} onChange={switchChangeHandler} />
          <Typography
            marginLeft={"1.31rem"}
            color="#ffffff"
            fontSize={"standard"}
            fontWeight="regular"
          >
            List View
          </Typography>
        </Container>
      </HeaderBottom>
    </Container>
  );
}

export default Header;
