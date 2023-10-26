import React, { useState } from "react";
import "./Votes.css";

type FlavorVotes = {
  chocolate: number;
  vanilla: number;
  strawberry: number;
};

type FlavorColors = {
  [key in keyof FlavorVotes]: string;
};

const flavorColors: FlavorColors = {
  chocolate: "#4f2c2c",
  vanilla: "#cbc0ac",
  strawberry: "#de8c91",
};

const Votes = () => {
  const [votes, setVotes] = useState<FlavorVotes>({ chocolate: 0, vanilla: 0, strawberry: 0 });

  const handleVote = (flavor: keyof FlavorVotes) => {
    setVotes((prevVotes) => ({ ...prevVotes, [flavor]: prevVotes[flavor] + 1 }));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const hasVotes = totalVotes > 0;

  return (
    <div className="vote-section">
      <h2>Vote Here</h2>

      {Object.entries(votes).map(([flavor, count]) => {
        const flavorKey = flavor as keyof FlavorVotes;
        return (
          <div key={flavor} className="flavor">
            <button onClick={() => handleVote(flavorKey)}>{flavor}</button>
            <div className="vote-info">
              <span>
                {flavor}: {count} ({hasVotes ? ((count / totalVotes) * 100).toFixed(2) : 0}%)
              </span>
              {hasVotes && (
                <div
                  className="vote-bar"
                  style={{ width: `${(count / totalVotes) * 100}%`, backgroundColor: flavorColors[flavorKey] }}
                ></div>
              )}
            </div>
          </div>
        );
      })}

      {!hasVotes && <div>No votes yet.</div>}
    </div>
  );
};

export default Votes;
