import React from "react";
import classes from "./HealthPartners.module.css";
import healthPartners from "../../assets/images/healthPartners.png";
import Text from "../UI/Text";
import Button from "../UI/Button";
import Container from "../UI/Container";

function HealthPartners() {
  return (
    <Container style={{ justifyContent: "center", marginBottom: "5.5rem" }}>
      <div className={classes.container}>
        <div className={classes["container-left"]}>
          <div className={classes["text-container"]}>
            <Text fontSize="xxl" fontWeight="bolder" lineHeight={"3rem"}>
              Trusted by Ghana’s leading health partners
            </Text>
            <Text fontSize="xl" fontWeight="regular" lineHeight={"1.53rem"}>
              We work with the most trusted health partners in Ghana
            </Text>
          </div>
          <Button
            style={{
              width: "12.19rem",
              backgroundColor: "#ff7d19",
              marginTop: "1.44rem",
            }}
          >
            Partner with MedSearch
          </Button>
        </div>
        <img src={healthPartners} alt="" />
      </div>
    </Container>
  );
}

export default HealthPartners;
