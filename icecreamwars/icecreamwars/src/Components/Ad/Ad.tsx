import React from "react";
import "./Ad.css";

type AdProps = {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
};

const Ad: React.FC<AdProps> = ({ flavor, fontSize, darkTheme }) => {
  const themeClass = darkTheme ? "dark" : "light";

  return (
    <div className={`ad ${themeClass}`}>
      <p style={{ fontSize: `${fontSize}px` }}>Vote For</p>
      <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
    </div>
  );
};

export default Ad;
