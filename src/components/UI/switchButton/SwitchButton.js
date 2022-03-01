import React, { useState } from "react";
import Switch from "react-switch";

SwitchButton.defaultProps = {
  value: null,
  onChange: (value) => {
    console.log(value);
  },
};

function SwitchButton({ value, onChange }) {
  const [checked, setChecked] = useState(value ?? false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    onChange(nextChecked);
  };

  return (
    <div>
      <Switch
        onChange={handleChange}
        checked={value ?? checked}
        className="react-switch"
        onColor="#317B85"
        offColor="#d2d2d2"
        onHandleColor="#ffffff"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="linear-gradient(0deg, #FFFFFF, #FFFFFF)"
        activeBoxShadow="linear-gradient(0deg, #FFFFFF, #FFFFFF)"
        height={16}
        width={36}
      />
    </div>
  );
}

export default SwitchButton;
