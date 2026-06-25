import { useState } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <div className="counter-buttons">
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
