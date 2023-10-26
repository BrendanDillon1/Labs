import React, { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("Chocolate");
  const [theme, setTheme] = useState<string>("Light");
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <div className="ad-designer">
      <h2>Ad Designer</h2>
      <div className={`ad ${theme.toLowerCase()}`}>
        <p style={{ fontSize: `${fontSize}px` }}>Vote For</p>
        <p style={{ fontSize: `${fontSize}px` }}>{selectedFlavor}</p>
      </div>
      <div>
        <p>Want to Support</p>
        <button onClick={() => setSelectedFlavor("Chocolate")} disabled={selectedFlavor === "Chocolate"}>
          Chocolate
        </button>
        <button onClick={() => setSelectedFlavor("Vanilla")} disabled={selectedFlavor === "Vanilla"}>
          Vanilla
        </button>
        <button onClick={() => setSelectedFlavor("Strawberry")} disabled={selectedFlavor === "Strawberry"}>
          Starwberry
        </button>
      </div>
      <div>
        <p>Color Theme</p>
        <button onClick={() => setTheme("Light")} disabled={theme === "Light"}>
          Light
        </button>
        <button onClick={() => setTheme("Dark")} disabled={theme === "Dark"}>
          Dark
        </button>
      </div>
      <p>Font Size</p>
      <div className="font-size-container">
        <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        <p>{fontSize}</p>
        <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
