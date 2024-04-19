import React from "react";
import Input from "../Input";

function GradientGenerator() {
  const [colors, setColors] = React.useState(["#db4e1f", "#e5ca1f"]);

  console.log({ colors });
  return (
    <div>
      <div>gradient preview here</div>
      {colors.map((color, index) => (
        <Input
          label={`Color ${index + 1}`}
          inputType={"color"}
          value={color}
          onChange={(e) => setColors(e.target.value)}
        />
      ))}
    </div>
  );
}

export default GradientGenerator;
