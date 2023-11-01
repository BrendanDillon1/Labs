import React from "react";
import "./App.css";
import Header from "../Header/Header";
import AdDesigner from "../AdDesigner/AdDesigner";
import Votes from "../Votes/Votes";
import Ad from "../Ad/Ad";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header user="chirpus" />
      <Ad flavor="Chocolate" fontSize={20} darkTheme={false} />
      <Ad flavor="Vanilla" fontSize={20} darkTheme={true} />
      <Ad flavor="Strawberry" fontSize={20} darkTheme={false} />
      <AdDesigner />
      <Votes />
    </div>
  );
};

export default App;
