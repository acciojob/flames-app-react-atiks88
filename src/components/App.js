import React, { useState } from "react";
import '../styles/App.css';


const App = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [releation, setReleation] = useState("");

  const result = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];

  const calculateLove = () => {
    const name1 = inputValue1;
    const name2 = inputValue2;

    // Create a map to store characters and their frequencies from name1
    let map = {};
    for (let i = 0; i < name1.length; i++) {
      const char = name1[i];
      map[char] = (map[char] || 0) + 1;
    }

    // Count common characters and update the map
    let common = 0;
    for (let i = 0; i < name2.length; i++) {
      const char = name2[i];
      if (map[char] > 0) {
        common++;
        map[char]--;
      }
    }

    // Determine the relationship based on the common characters
    const relationshipIndex = (name1.length + name2.length - 2 * common) % 6;
    const relationship = result[relationshipIndex];

    // Set the relationship in the state
    setReleation(relationship);
  };

  const handleClear = () => {
    setInputValue1("");
    setInputValue2("");
    setReleation("");
  };

  return (
    <div id="main">
      <form>
        <input
          data-testid="input1"
          placeholder="Enter first name"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
        />
        <input
          data-testid="input2"
          placeholder="Enter second name"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
        <button
          data-testid="calculate_relationship"
          type="button"
          onClick={calculateLove}
        >
          Calculate Relationship Further
        </button>
        <button data-testid="clear" type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
      {releation && <h3 data-testid="result">{releation}</h3>}
    </div>
  );
};

export default App;
