import React from "react";
import "./App.css";
import Header from "../Header/Header";
import AdDesigner from "../AdDesigner/AdDesigner";
import Votes from "../Votes/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
