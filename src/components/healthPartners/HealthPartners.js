import React from "react";
import classes from "./HealthPartners.module.css";
import healthPartners from "../../assets/images/healthPartners.png";
import Typography from "../UI/Typography";
import Button from "../UI/Button";

function HealthPartners() {
  return (
    <div className={classes.container}>
      <div className={classes["container-left"]}>
        <div className={classes["text-container"]}>
          <Typography variant={`xxl`} color="primary">
            Trusted by Ghana’s leading health partners
          </Typography>
          <Typography variant={`xl`} color="primary">
            We work with the most trusted health partners in Ghana
          </Typography>
        </div>
        <Button style={{ width: "12.19rem", backgroundColor: "#ff7d19" }}>
          Partner with MedSearch
        </Button>
      </div>
      <img src={healthPartners} alt="" />
    </div>
  );
}

export default HealthPartners;
