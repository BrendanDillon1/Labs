import React from "react";
import "./Header.css";
import { type } from "os";

type headerProps = {
  user: string;
};

const Header: React.FC<headerProps> = ({ user }) => {
  return (
    <header className="header">
      <h1 className="ice-cream-wars-header">Ice Cream Wars</h1>
      <div className="user-display">{user}</div>
    </header>
  );
};

export default Header;
