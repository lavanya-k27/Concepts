import { useState, useCallback } from "react";
import "./App.css";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];

const App = () => {
  const [query, setQuery] = useState("");

  const filterItems = useCallback(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const results = filterItems();

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="search-list">
        {results.map((item) => (
          <li key={item} className="search-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
