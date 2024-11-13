import React from "react";
import "./MenPage.css";

const MenPage = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Men Clothing 1",
      image: "/men.png",
      price: 29.99,
    },
    {
      id: 2,
      name: "Men Clothing 2",
      image: "/men1.png",
      price: 39.99,
    },
    {
      id: 3,
      name: "Men Clothing 3",
      image: "/men2.png",
      price: 49.99,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Men's Section</h2>
      <p>Welcome to the Men's section!</p>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleAddToCart(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
