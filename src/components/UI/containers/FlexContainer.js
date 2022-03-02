import React from "react";
import { Container } from "./FlexContainer-styles";

ContainerComponent.defaultProps = {
  children: "",
  style: {
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "0",
    marginBottom: "0",
    marginRight: "0",
    marginLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "0",
    paddingLeft: "0",
    borderTopWidth: "0",
    borderTopColor: "transparent",
    borderTopStyle: "none",
    maxWidth: "none",
    borderRadius: "0",
  },
};

function ContainerComponent({ children, style }) {
  return (
    <Container $styles={{ ...ContainerComponent.defaultProps.style, ...style }}>
      {children}
    </Container>
  );
}

export default ContainerComponent;
