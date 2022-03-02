import React from "react";
import { Typography } from "./Typography-styles";

const fontSizeMapping = {
  xxxl: "2.88rem",
  xxl: "2rem",
  xl: " 1.13rem",
  l: "0.88rem",
  m: "0.75rem",
  s: "0.56rem",

  standard: "1rem",
};

const fontWeightMapping = {
  bolder: "700",
  bold: "500",
  regular: "400",
  light: "300",
};

function TextComponent({
  children,
  fontSize,
  color,
  fontWeight,
  lineHeight,
  textAlign,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
}) {
  return (
    <Typography
      $fontSize={fontSize ? fontSizeMapping[fontSize] : "1rem"}
      $color={color}
      $fontWeight={fontWeight ? fontWeightMapping[fontWeight] : "400"}
      $lineHeight={lineHeight}
      $textAlign={textAlign}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $marginTop={marginTop}
      $marginRight={marginRight}
    >
      {children}
    </Typography>
  );
}

export default TextComponent;
