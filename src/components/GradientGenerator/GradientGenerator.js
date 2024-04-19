import React from "react";
import Input from "../Input";

function GradientGenerator() {
  const [colors, setColors] = React.useState([
    {
      id: crypto.randomUUID(),
      color: "#f9c91a",
    },
    {
      id: crypto.randomUUID(),
      color: "#bb3a3a",
    },
  ]);

  function handleColorChange(colorValue, colorIndex) {
    const nextColors = [...colors];
    nextColors[colorIndex] = {
      ...nextColors[colorIndex],
      color: colorValue,
    };
    setColors(nextColors);
  }

  console.log({ colors });
  return (
    <div>
      <div>gradient preview here</div>
      {colors.map((color, index) => (
        <Input
          key={color.id}
          label={`Color ${index + 1}`}
          inputType={"color"}
          value={color.color}
          onChange={(e) => handleColorChange(e.target.value, index)}
        />
      ))}
    </div>
  );
}

export default GradientGenerator;
