import React, { useState } from "react";

function RandomColor() {
  const [colorType, setCurrentType] = useState("HEX");
  const [color, setColory] = useState("#000000");

  const handleHexChange = () => {};
  const handleRgbChange = () => {};

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setCurrentType("hex")}>Hex Color</button>
      <button onClick={() => setCurrentType("rgb")}>Rgb Color</button>
    </div>
  );
}

export default RandomColor;
