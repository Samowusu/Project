import React from "react";
import classes from "./HealthPartners.module.css";
import healthPartners from "../../assets/images/healthPartners.png";
import Typography from "../UI/Typography";
import Button from "../UI/Button";
import Container from "../UI/Container";

function HealthPartners() {
  return (
    <Container style={{ justifyContent: "center", marginBottom: "5.5rem" }}>
      <div className={classes.container}>
        <div className={classes["container-left"]}>
          <div className={classes["text-container"]}>
            <Typography
              fontSize="xxl"
              fontWeight="bolder"
              lineHeight={"3rem"}
              textAlign="start"
              marginBottom={"28px"}
            >
              Trusted by Ghana’s leading health partners
            </Typography>
            <Typography
              fontSize="xl"
              fontWeight="regular"
              lineHeight={"1.53rem"}
              textAlign="start"
            >
              We work with the most trusted health partners in Ghana
            </Typography>
          </div>
          <Button
            style={{
              width: "12.19rem",
              backgroundColor: "#ff7d19",
              marginTop: "2.06rem",
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
