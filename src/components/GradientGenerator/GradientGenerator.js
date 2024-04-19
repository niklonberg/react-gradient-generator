import React from "react";
import Input from "../Input";

function GradientGenerator() {
  const [colors, setColors] = React.useState(["#db4e1f", "#e5ca1f"]);

  function handleColorChange(color, colorIndex) {
    const nextColors = [...colors];
    nextColors[colorIndex] = color;
    setColors(nextColors);
  }

  console.log({ colors });
  return (
    <div>
      <div>gradient preview here</div>
      {colors.map((color, index) => (
        <Input
          label={`Color ${index + 1}`}
          inputType={"color"}
          value={color}
          onChange={(e) => handleColorChange(e.target.value, index)}
        />
      ))}
    </div>
  );
}

export default GradientGenerator;
