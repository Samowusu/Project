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
        backgroundColor="#46A7B7"
      >
        <Search />
        <Container
          style={{ marginTop: "6.88rem", justifyContent: "space-between" }}
        >
          <Container
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <Container
              style={{
                justifyContent: "flex-start",
                marginBottom: "5px",
              }}
            >
              <Typography color={"#ffffff"} fontSize={"l"} marginRight={"10px"}>
                FIND DOCTOR
              </Typography>
              <Typography fontSize={"s"} color="#ffffff" marginTop={"3px"}>
                400+ Doctors
              </Typography>
            </Container>
            <Container style={{ justifyContent: "flex-start" }}>
              <Typography
                marginRight={"15px"}
                fontWeight="bolder"
                fontSize={"xl"}
                color="#ffffff"
              >
                Doctors{" "}
              </Typography>
              <Typography marginRight={"9px"} fontSize="xl" color={"#ffffff"}>
                near{" "}
              </Typography>
              <Typography fontWeight="bolder" fontSize={"xl"} color="#ffffff">
                {" "}
                You
              </Typography>
            </Container>
          </Container>
          <Container style={{ justifyContent: "flex-end" }}>
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
        </Container>
      </HeaderBottom>
    </Container>
  );
}

export default Header;
