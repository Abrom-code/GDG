import React, { useState } from "react";
import "./App.css";
import { useCharacterCount } from "./hook/useCharacterCount";

function App() {
  const limit = 150;
  const { state, handleTextChange, warning } = useCharacterCount(limit);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(state.text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <div className="container">
      <h2>Character Counter</h2>
      <textarea
        onChange={(e) => handleTextChange(e.target.value)}
        value={state.text}
        maxLength={limit}
        rows="5"
        placeholder="Type your text here..."
      />
      <p className={warning ? "warning" : ""}>
        {state.length}/{limit} characters
      </p>

      <progress
        value={state.length}
        max={limit}
        className="progress-bar"
      ></progress>

      <button onClick={copyToClipboard}>
        {copied ? "Copied" : "Copy Text"}
      </button>
    </div>
  );
}

export default App;
