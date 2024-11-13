import React from "react";
import "./WomenPage.css"; // Import your CSS for styling

const WomenPage = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Dress 1",
      image: "/women1.png", // Ensure these images exist in your public folder
      price: 29.99, // Price for Dress 1
    },
    {
      id: 2,
      name: "Dress 2",
      image: "/women2.png",
      price: 39.99, // Price for Dress 2
    },
    {
      id: 3,
      name: "Dress 3",
      image: "/women3.png",
      price: 49.99, // Price for Dress 3
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Women's Section</h2>
      <p>Welcome to the Women's section!</p>
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
            <p>${product.price.toFixed(2)}</p> {/* Display the price */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenPage;
