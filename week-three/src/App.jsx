import { useState } from "react";
import { Members } from "./assets/Members.js";
import GroupMembers from "./components/GroupMembers.jsx";
import "./index.css";

function App() {
  return (
    <>
      <GroupMembers members={Members} />
    </>
  );
}

export default App;
