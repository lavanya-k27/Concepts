import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <p className="timer-display">{seconds}s</p>
      <p className="timer-label">elapsed</p>
    </div>
  );
};

export default App;
