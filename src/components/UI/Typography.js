import React from "react";
import cn from "classnames";
import "./typography.css";

// Defining the HTML tag that the component will support
const variantsMapping = {
  xxxl: "h1",
  xxl: "h2",
  xl: "h3",
  l: "h4",
  m: "h5",
  s: "h6",
};

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component
const Typography = ({ variant, color, children, ...props }) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  const Component = variant ? variantsMapping[variant] : "h6";

  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
