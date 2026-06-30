import { useRef } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="ref-container">
      <h2 className="ref-title">useRef Example</h2>
      <input
        ref={inputRef}
        className="ref-input"
        type="text"
        placeholder="Type something..."
      />
      <div className="ref-buttons">
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear}>Clear Input</button>
      </div>
    </div>
  );
};

export default App;
