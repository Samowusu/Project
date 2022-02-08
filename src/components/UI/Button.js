import React from "react";
import { Button } from "./Button-styles";

function ButtonComponent({ children, onClick, color, width, backgroundColor }) {
  return (
    <Button
      onClick={onClick}
      color={color}
      $width={width}
      $backgroundColor={backgroundColor}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
