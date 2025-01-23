import { useState } from "react";

export default function App() {

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>COUNTER</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)} disabled = {count === 0}>RESET</button>
      
    </div>
  );
}
