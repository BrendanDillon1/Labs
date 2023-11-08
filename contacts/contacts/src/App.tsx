import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./utils/Interface";
import ".//components/ContactForm/ContactForm.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
