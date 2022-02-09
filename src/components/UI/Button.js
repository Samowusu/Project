import React, { useEffect } from "react";
import { Button } from "./Button-styles";

ButtonComponent.defaultProps = {
  children: "Click Me",
  onClick: () => {},
  style: {
    color: "#fff",
    width: "11.25rem",
    height: "3rem",
    backgroundColor: "#00778a",
    borderRadius: "4px",
    fontSize: "0.88rem",
    fontWeight: "700",
  },
};

function ButtonComponent({ children, onClick, style }) {
  return (
    <Button
      onClick={onClick}
      $styles={{ ...ButtonComponent.defaultProps.style, ...style }}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
