import React from "react";
import Input from "../Input";

function GradientGenerator() {
  const [color, setColor] = React.useState([]);

  console.log({ color });
  return (
    <div>
      <div>gradient preview here</div>
      <Input
        label={"Color 1"}
        inputType={"color"}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default GradientGenerator;
