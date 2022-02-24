import React, { useState } from "react";
import Switch from "react-switch";

const BasicHooksExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div>
      <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        onColor="#00000033"
        offColor="#00000033"
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
};

export default BasicHooksExample;
