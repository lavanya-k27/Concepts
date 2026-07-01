import { useState } from "react";
import Classbased from "./components/Classbased";
import FunctionalBased from "./components/FunctionalBased";
import "./App.css";

function App() {
  const [classBased, setClassBased] = useState(false);

  const handleClick = () => {
    setClassBased(!classBased);
  };

  return (
    <div className="app-container">
      <h2>{classBased ? "Class Based code" : "Functional Based Code"}</h2>
      <div className="code-container">
        {classBased ? <Classbased /> : <FunctionalBased />}
      </div>
      <div className="button-container">
        <button onClick={handleClick}>
          {classBased ? "View Functional Based Code" : "View Class Based Code"}
        </button>
      </div>
    </div>
  );
}

export default App;
