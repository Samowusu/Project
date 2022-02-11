import React from "react";
import { Text } from "./Text-styles";

const fontSizeMapping = {
  xxxl: "2.88rem",
  xxl: "2rem",
  xl: " 1.13rem",
  l: "0.88rem",
  m: "0.75rem",
  s: "0.56rem",
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
}) {
  return (
    <Text
      $fontSize={fontSize ? fontSizeMapping[fontSize] : "0.56rem"}
      $color={color}
      $fontWeight={fontWeight ? fontWeightMapping[fontWeight] : "400"}
      $lineHeight={lineHeight}
      $textAlign={textAlign}
    >
      {children}
    </Text>
  );
}

export default TextComponent;
