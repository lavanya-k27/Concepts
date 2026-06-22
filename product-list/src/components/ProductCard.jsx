import React from "react";

const ProductCard = React.memo(({ product, isFavorite, onToggle }) => {
  console.log(`ProductCard rendered: ${product.name}`); // watch this

  return (
    <div className={`card ${isFavorite ? "favorited" : ""}`}>
      <p className="card-name">{product.name}</p>
      <span className={`card-category cat-${product.category.toLowerCase()}`}>
        {product.category}
      </span>
      <p className="card-price">${product.price}</p>
      <button
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={() => onToggle(product.id)}
      >
        {isFavorite ? "♥ Favorited" : "♡ Favorite"}
      </button>
    </div>
  );
});

export default ProductCard;
