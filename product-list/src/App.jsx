import { useState, useMemo, useCallback } from "react";
import { PRODUCTS } from "./data/products";
import Controls from "./components/Controls";
import ProductCard from "./components/ProductCard";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("default");
  const [favorites, setFavorites] = useState(new Set());

  const filteredProducts = useMemo(() => {
    console.log("useMemo: recomputing filtered list");

    let result = PRODUCTS.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !category || p.category === category;
      return matchSearch && matchCategory;
    });

    if (sort === "price-asc")
      result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "name")
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, sort]);

  // ─── useCallback ───────────────────────────────────────────────────────────
  // Stable function reference — only recreated when `favorites` changes.
  // Without this, every render creates a new function, causing ProductCard
  // and Controls to re-render even when their data hasn't changed.
  const handleToggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []); // empty deps: setFavorites is stable, so this never needs to change

  const handleSearch = useCallback((val) => setSearch(val), []);
  const handleCategory = useCallback((val) => setCategory(val), []);
  const handleSort = useCallback((val) => setSort(val), []);

  return (
    <div className="app">
      <h1>Products</h1>

      <Controls
        onSearch={handleSearch}
        onCategory={handleCategory}
        onSort={handleSort}
      />

      <p className="stats">
        Showing <strong>{filteredProducts.length}</strong> of{" "}
        <strong>{PRODUCTS.length}</strong> products
        {favorites.size > 0 && ` · ${favorites.size} favorited`}
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty">No products match your search.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.has(product.id)}
              onToggle={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
