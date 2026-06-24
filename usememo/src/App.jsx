import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(5);
  const [darkMode, setDarkMode] = useState(false);

  const doubled = useMemo(() => {
    console.log("calculating...");
    return count * 2;
  }, [count]);

  return (
    <div
      style={{
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#111",
        padding: 30,
        minHeight: "100vh",
      }}
    >
      <h2>useMemo Basic</h2>

      <p>Count: {count}</p>
      <p>Doubled (memoized): {doubled}</p>

      <br />

      <button onClick={() => setCount(count + 1)}>
        Increment count → re-runs memo
      </button>

      <br />
      <br />

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle dark mode → does NOT re-run memo
      </button>

      <br />
      <br />
      <small style={{ color: "gray" }}>
        Open console to see when "calculating..." prints
      </small>
    </div>
  );
}
