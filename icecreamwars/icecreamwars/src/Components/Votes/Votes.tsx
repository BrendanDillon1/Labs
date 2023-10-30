import React, { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);

  const totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;

  return (
    <div className="vote-section">
      <h2>Vote Here</h2>

      <div className="buttons-row">
        <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
        <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
        <button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>
      </div>

      <div className="votes-display">
        {chocolateVotes > 0 && (
          <div>
            Chocolate: {chocolateVotes} ({((chocolateVotes / totalVotes) * 100).toFixed(2)}%)
            <div
              className="vote-bar"
              style={{ width: `${(chocolateVotes / totalVotes) * 100}%`, backgroundColor: "brown" }}
            ></div>
          </div>
        )}
        {vanillaVotes > 0 && (
          <div>
            Vanlla: {vanillaVotes} ({((vanillaVotes / totalVotes) * 100).toFixed(2)}%)
            <div
              className="vote-bar"
              style={{ width: `${(vanillaVotes / totalVotes) * 100}%`, backgroundColor: "beige" }}
            ></div>
          </div>
        )}
        {strawberryVotes > 0 && (
          <div>
            Strawberry: {strawberryVotes} ({((strawberryVotes / totalVotes) * 100).toFixed(2)}%)
            <div
              className="vote-bar"
              style={{ width: `${(strawberryVotes / totalVotes) * 100}%`, backgroundColor: "pink" }}
            ></div>
          </div>
        )}
      </div>

      {totalVotes === 0 && <div>No votes yet.</div>}
    </div>
  );
};

export default Votes;
