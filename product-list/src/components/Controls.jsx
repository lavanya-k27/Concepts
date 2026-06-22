import React from "react";

const Controls = React.memo(({ onSearch, onCategory, onSort }) => {
  console.log("Controls rendered"); // watch this in DevTools

  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search products…"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onCategory(e.target.value)}>
        <option value="">All categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Clothing">Clothing</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="default">Sort: default</option>
        <option value="price-asc">Price: low → high</option>
        <option value="price-desc">Price: high → low</option>
        <option value="name">Name A–Z</option>
      </select>
    </div>
  );
});

export default Controls;
